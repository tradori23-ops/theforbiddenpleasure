/* LUX COMICS & MEDUSA COMICS — Service Worker
   Strategia mista:
   - loader.js e le pagine (navigazioni, es. apertura di index.html,
     admin.html...) vanno SEMPRE prima in rete. Sono i file che decidono
     quale versione di tutto il resto caricare (tramite il numero V dentro
     loader.js): se restassero in cache vecchia, un dispositivo potrebbe
     restare bloccato su una versione superata per sempre, anche dopo
     mille aggiornamenti di app.js/style.css — è successo davvero, da qui
     questa correzione. La cache qui serve solo come riserva se sei offline.
   - Tutto il resto (style.css, app.js — già versionati con ?v=N — font,
     immagini, icone) resta "stale-while-revalidate": si serve subito
     dalla cache se c'è, e si aggiorna in background per la prossima
     volta — questo è ciò che rende le riaperture quasi istantanee.
   Il contenuto vero (catalogo, messaggi, notifiche) non passa mai da qui:
   arriva sempre live da Supabase, quindi resta sempre aggiornato
   indipendentemente da questa cache. */

var CACHE_NAME = 'lux-comics-v5';
var CORE_ASSETS = [
  './',
  './index.html'
];

self.addEventListener('install', function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CORE_ASSETS).catch(function(){
        /* alcuni asset potrebbero non esistere ancora — non blocca l'installazione */
      });
    })
  );
});

var OFFLINE_CATALOG_CACHE = 'lux-offline-catalog-v1'; // mai da cancellare agli aggiornamenti — è la cache dei verificati, deve sopravvivere

// File che il sito non usa più ma che le versioni precedenti tenevano in
// cache: occupano spazio sul telefono per niente (support-banner.png da solo
// pesava più di 3 MB, "app.js" senza ?v= era un doppione da 1 MB).
var OBSOLETE_PATHS = ['/app.js', '/support-banner.png', '/hero-bg.jpg'];

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME && k !== OFFLINE_CATALOG_CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){
      return caches.open(CACHE_NAME).then(function(cache){
        return cache.keys().then(function(reqs){
          // 1) file che il sito non usa più
          var doomed = reqs.filter(function(r){
            var u = new URL(r.url);
            return !u.search && OBSOLETE_PATHS.some(function(p){ return u.pathname.slice(-p.length) === p; });
          });
          // 2) per ogni file con ?v=N si tiene solo la versione più recente
          var newest = {};
          reqs.forEach(function(r){
            var u = new URL(r.url);
            var v = parseInt(u.searchParams.get('v'), 10);
            if(isNaN(v)) return;
            if(!newest[u.pathname] || v > newest[u.pathname]) newest[u.pathname] = v;
          });
          reqs.forEach(function(r){
            var u = new URL(r.url);
            var v = parseInt(u.searchParams.get('v'), 10);
            if(!isNaN(v) && v < newest[u.pathname]) doomed.push(r);
          });
          return Promise.all(doomed.map(function(r){ return cache.delete(r); }));
        });
      }).catch(function(){});
    }).then(function(){ return self.clients.claim(); })
  );
});

/* I file con ?v=N nell'indirizzo (app.js, style.css, chrome-*.html) non
   cambiano mai: quando esce una versione nuova cambia l'indirizzo stesso.
   Quando ne salviamo una, le versioni vecchie dello stesso file si buttano. */
function dropOlderVersions(cache, url){
  cache.keys().then(function(reqs){
    reqs.forEach(function(r){
      var u = new URL(r.url);
      if(u.pathname === url.pathname && u.searchParams.has('v') && u.search !== url.search) cache.delete(r);
    });
  }).catch(function(){});
}

// Per gli altri file (immagini, icone, font del sito) il controllo in rete
// "ci sono novità?" si fa al massimo ogni 10 minuti per file, non a ogni
// singola pagina aperta.
var REVALIDATE_EVERY_MS = 10 * 60 * 1000;
var lastRevalidated = {};

function isAlwaysFreshRequest(req, url){
  // Navigazioni = apertura di una pagina (index.html, admin.html, ecc.)
  if(req.mode === 'navigate') return true;
  // loader.js per nome file, indipendentemente dal path esatto
  if(/\/loader\.js$/.test(url.pathname)) return true;
  return false;
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;

  var url = new URL(req.url);
  // le chiamate a Supabase (dati, autenticazione, storage) non passano
  // MAI dalla cache: devono essere sempre live, non è "la corazza" del sito
  if(url.origin !== self.location.origin) return;

  // Rete-prima per pagine e loader.js: se c'è connessione, sono SEMPRE
  // aggiornati; la cache è solo il paracadute se sei offline.
  if(isAlwaysFreshRequest(req, url)){
    event.respondWith(
      fetch(req).then(function(response){
        if(response && response.ok){
          caches.open(CACHE_NAME).then(function(cache){
            try { cache.put(req, response.clone()); } catch(e){} // risposta già letta altrove nel frattempo: niente da salvare, non blocca la pagina
          });
        }
        return response;
      }).catch(function(){
        return caches.open(CACHE_NAME).then(function(cache){
          return cache.match(req).then(function(cached){
            if(cached) return cached;
            return cache.match('./index.html').then(function(indexCached){
              if(indexCached) return indexCached;
              // Offline e nessuna copia salvata da nessuna parte: rispondiamo
              // comunque con una Response vera, invece di lasciare che la
              // catena risolva a "undefined" — è proprio questo che rompeva
              // event.respondWith() con "Failed to convert value to 'Response'".
              return new Response('Connessione assente e nessuna copia salvata disponibile.', {
                status: 503, statusText: 'Offline',
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
              });
            });
          });
        });
      })
    );
    return;
  }

  // Prima questo ramo riscaricava in sottofondo OGNI file a OGNI pagina
  // aperta, anche quelli già in cache e immutabili: circa 1-2 MB in più a
  // ogni cambio pagina (app.js da solo pesa 1 MB), che rubavano banda a
  // copertine e dati proprio mentre la pagina si stava caricando.
  var versioned = url.searchParams.has('v');
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.match(req).then(function(cached){
        if(cached && versioned) return cached; // immutabile: niente da ricontrollare
        var now = Date.now();
        if(cached && lastRevalidated[req.url] && now - lastRevalidated[req.url] < REVALIDATE_EVERY_MS) return cached;
        lastRevalidated[req.url] = now;
        var network = fetch(req).then(function(response){
          if(response && response.ok){
            try { cache.put(req, response.clone()); } catch(e){} // vedi nota sopra
            if(versioned) dropOlderVersions(cache, url);
          }
          return response;
        }).catch(function(){
          // "cached" è già garantito falso qui sotto (altrimenti non
          // saremmo mai arrivati a usare "network") — stesso principio
          // del punto sopra: mai undefined, sempre una Response vera.
          return new Response('', { status: 504, statusText: 'Offline' });
        });
        // se l'abbiamo già in cache la serviamo subito; il fetch sopra
        // aggiorna la cache in background, al massimo ogni 10 minuti
        return cached || network;
      });
    })
  );
});


/* ============ NOTIFICHE PUSH ============ */
self.addEventListener('push', function(event){
  var data = {};
  try { data = event.data ? event.data.json() : {}; } catch(e){}
  var title = data.title || 'LUX COMICS';
  var options = {
    body: data.body || '',
    icon: data.icon || './icon-192.png', // avatar di chi ha fatto l'azione, quando c'è
    badge: './icon-192.png', // resta sempre il sigillo del sito: è la sagoma piccola in alto, un avatar lì sarebbe illeggibile
    image: data.image || undefined, // copertina del titolo, quando la notifica lo riguarda
    tag: data.tag || undefined, // stesso tag = si sostituiscono invece di accumularsi (es. più "mi piace" sullo stesso titolo)
    renotify: !!data.tag, // ...ma avvisano comunque di nuovo, non restano mute alla seconda volta
    actions: Array.isArray(data.actions) ? data.actions : undefined,
    data: { url: data.url || './', actionUrls: data.actionUrls || null }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var ndata = event.notification.data || {};
  var url = ndata.url || './';
  // un pulsante dell'azione (es. "Rispondi") può avere un indirizzo diverso da quello di base
  if(event.action && ndata.actionUrls && ndata.actionUrls[event.action]) url = ndata.actionUrls[event.action];
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list){
      for (var i = 0; i < list.length; i++){
        var client = list[i];
        if('focus' in client){
          // una scheda già aperta va portata proprio al punto giusto, non solo messa a fuoco
          // ferma com'era — è esattamente il difetto che si voleva correggere
          if('navigate' in client){
            return client.navigate(url).then(function(c){ return c ? c.focus() : client.focus(); }, function(){ return client.focus(); });
          }
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
