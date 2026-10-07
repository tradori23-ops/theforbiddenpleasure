/* LUX COMICS & MEDUSA COMICS — Service Worker
   Strategia mista:
   - loader.js e le pagine (navigazioni, es. apertura di index.html,
     admin.html...) vanno SEMPRE prima in rete. Sono i file che decidono
     quale versione di tutto il resto caricare (tramite il numero V dentro
     loader.js): se restassero in cache vecchia, un dispositivo potrebbe
     restare bloccato su una versione superata per sempre, anche dopo
     mille aggiornamenti di app.js/style.css — è successo davvero, da qui
     questa correzione. La cache qui serve solo come riserva se sei offline.
     v219: "prima in rete" ha un limite di attesa. Su 2G/3G o con segnale
     ballerino la rete può metterci 10-30 secondi solo per la pagina: se non
     risponde entro 3 secondi (2,5 per loader.js) si apre la copia salvata e
     la rete finisce di scaricare in sottofondo, così la volta dopo è già
     aggiornata. Mai bloccati su una versione vecchia: al massimo una
     apertura in ritardo.
   - v219: all'installazione si salva subito il "guscio" dell'app (pagine
     principali, app.js, style.css, intestazione e piè di pagina della
     versione in uso), quasi sempre senza traffico in più perché il
     browser li ha appena scaricati: dalla seconda apertura l'app parte
     dalla memoria del telefono anche dopo giorni.
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

var SHELL_PAGES = ['./schedario.html', './community.html', './contatti.html', './chat.html'];
var SHELL_FILES = ['./logo-sm.webp', './smallnox-calm.webp', './qrcode-lib.js', './manifest.json'];
var VERSIONED_FILES = ['app.js', 'style.css', 'chrome-top.html', 'chrome-footer.html', 'chrome-modals.html'];

// si salva solo una risposta buona e "diretta": una risposta arrivata dopo un
// reindirizzamento, usata poi per aprire una pagina, i browser la rifiutano
function okToSave(res){ return !!(res && res.ok && !res.redirected); }

// loader.js decide quale versione di tutto il resto caricare. Una sua copia
// salvata non deve MAI chiedere file che non sono salvati (offline sarebbe una
// pagina vuota): prima si salvano app.js, style.css e le parti condivise della
// sua versione, e solo se ci sono tutti si sostituisce la copia di loader.js.
function saveLoaderCoherently(cache, key, resp){
  return resp.clone().text().then(function(txt){
    var m = /var V = "(\d+)"/.exec(txt);
    if(!m) return;
    return Promise.all(VERSIONED_FILES.map(function(f){
      var abs = new URL('./' + f + '?v=' + m[1], self.location).href;
      return cache.match(abs).then(function(hit){
        if(hit) return;
        return fetch(abs).then(function(r){ if(!okToSave(r)) throw new Error('manca ' + f); return cache.put(abs, r); });
      });
    })).then(function(){ return cache.put(key, resp); });
  }).catch(function(){ /* manca qualcosa: resta la copia di prima, che è coerente */ });
}

// Il guscio dell'app: pagine principali, immagini fisse, e la versione indicata
// da loader.js. Ogni file è facoltativo: se la rete cade l'installazione va avanti.
function precacheShell(){
  return caches.open(CACHE_NAME).then(function(cache){
    return Promise.all(SHELL_PAGES.concat(SHELL_FILES).map(function(u){
      var abs = new URL(u, self.location).href;
      return cache.match(abs).then(function(hit){
        if(hit) return;
        return fetch(abs).then(function(res){ if(okToSave(res)) return cache.put(abs, res); }).catch(function(){});
      });
    })).then(function(){
      return fetch('./loader.js').then(function(r){
        if(okToSave(r)) return saveLoaderCoherently(cache, new URL('./loader.js', self.location).href, r);
      }).catch(function(){});
    });
  });
}

self.addEventListener('install', function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      // una per una (non addAll): un file che manca o che arriva reindirizzato non blocca gli altri
      return Promise.all(CORE_ASSETS.map(function(u){
        return fetch(u).then(function(res){ if(okToSave(res)) return cache.put(u, res); }).catch(function(){});
      }));
    }).then(function(){
      // qualche secondo di pausa: la pagina che sta aprendo ha la precedenza sulla banda
      return new Promise(function(res){ setTimeout(res, 3000); });
    }).then(precacheShell)
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
          // 3) pagine salvate dalla v218 col "?..." nell'indirizzo (chat.html?user=…):
          // dalla v219 una pagina si salva una volta sola, senza "?"
          reqs.forEach(function(r){
            var u = new URL(r.url);
            if(u.search && !u.searchParams.has('v') && (/\.html$/.test(u.pathname) || /\/$/.test(u.pathname))) doomed.push(r);
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

// La risposta della rete se arriva entro "waitMs"; altrimenti la copia salvata
// (se c'è: senza copia si aspetta la rete). Senza rete: la copia, o la home.
function networkOrSavedCopy(net, key, waitMs, isNav){
  return new Promise(function(resolve){
    var done = false;
    function finish(r){ if(!done && r){ done = true; resolve(r); } }
    var timer = setTimeout(function(){
      caches.open(CACHE_NAME).then(function(cache){ return cache.match(key); }).then(finish, function(){});
    }, waitMs);
    net.then(function(response){
      clearTimeout(timer);
      // errore del server (per loader.js: qualunque errore) con una copia salvata → la copia
      var bad = !response || (response.type !== 'opaqueredirect' && !response.ok && (!isNav || response.status >= 500));
      if(!bad) return finish(response);
      caches.open(CACHE_NAME).then(function(cache){ return cache.match(key); })
        .then(function(hit){ finish(hit || response || new Response('', { status: 504, statusText: 'Offline' })); },
              function(){ finish(response || new Response('', { status: 504, statusText: 'Offline' })); });
    }, function(){
      clearTimeout(timer);
      caches.open(CACHE_NAME).then(function(cache){
        return cache.match(key).then(function(hit){
          if(hit || !isNav) return hit;
          return cache.match(self.location.origin + '/index.html').then(function(home){ return home || cache.match(self.location.origin + '/'); });
        });
      }).then(function(hit){
        // offline e nessuna copia: sempre una Response vera, mai undefined
        finish(hit || new Response(isNav ? 'Connessione assente e nessuna copia salvata disponibile.' : '', {
          status: isNav ? 503 : 504, statusText: 'Offline', headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        }));
      }, function(){ finish(new Response('', { status: 504, statusText: 'Offline' })); });
    });
  });
}

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
  // aggiornati. v219: se la rete non risponde entro pochi secondi si apre la
  // copia salvata; la risposta della rete, quando arriva, aggiorna la copia.
  if(isAlwaysFreshRequest(req, url)){
    var isNav = req.mode === 'navigate';
    // le pagine si salvano senza "?..." (chat.html?user=X e chat.html sono la stessa pagina)
    var key = isNav ? url.origin + url.pathname : req.url;
    var net = fetch(req);
    event.waitUntil(net.then(function(response){
      if(!okToSave(response)) return;
      var copy = response.clone();
      return caches.open(CACHE_NAME).then(function(cache){
        if(isNav) return cache.put(key, copy);
        // loader.js: qualche secondo perché la pagina scarichi da sé i file della
        // versione nuova, poi si salva solo se sono tutti al loro posto
        return new Promise(function(res){ setTimeout(res, 5000); }).then(function(){ return saveLoaderCoherently(cache, key, copy); });
      }).catch(function(){});
    }).catch(function(){}));
    event.respondWith(networkOrSavedCopy(net, key, isNav ? 3000 : 2500, isNav));
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
          if(okToSave(response)){
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
