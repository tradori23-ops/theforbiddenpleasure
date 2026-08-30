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

var CACHE_NAME = 'lux-comics-v4';
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

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME && k !== OFFLINE_CATALOG_CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

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
          caches.open(CACHE_NAME).then(function(cache){ cache.put(req, response.clone()); });
        }
        return response;
      }).catch(function(){
        return caches.open(CACHE_NAME).then(function(cache){
          return cache.match(req).then(function(cached){
            return cached || (req.mode === 'navigate' ? cache.match('./index.html') : undefined);
          });
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.match(req).then(function(cached){
        var network = fetch(req).then(function(response){
          if(response && response.ok) cache.put(req, response.clone());
          return response;
        }).catch(function(){
          // offline e nulla in cache per questa richiesta: se è una
          // navigazione (apertura di una pagina) mostriamo almeno la home
          // salvata, invece di una schermata bianca
          if(req.mode === 'navigate') return caches.match('./index.html');
          return cached;
        });
        // se l'abbiamo già in cache la serviamo subito; il fetch sopra
        // aggiorna comunque la cache in background per la prossima volta
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
    icon: data.icon || './icon-192.png',
    badge: './icon-192.png',
    data: { url: data.url || './' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list){
      for (var i = 0; i < list.length; i++){
        if ('focus' in list[i]) return list[i].focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
