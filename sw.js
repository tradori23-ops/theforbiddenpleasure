/* LUX COMICS & MEDUSA COMICS — Service Worker
   Strategia "stale-while-revalidate" per la corazza dell'app (HTML, CSS,
   JS, font, immagini, icone): se il file è già in cache, lo si serve
   SUBITO — zero attesa di rete — e nel frattempo lo si riscarica in
   background per la prossima volta. Il contenuto vero (catalogo,
   messaggi, notifiche) non passa mai da qui: arriva sempre live da
   Supabase, quindi resta sempre aggiornato indipendentemente da questa
   cache. Prima la strategia era "rete sempre prima di tutto", il che
   significava riscaricare l'intero sito ad ogni apertura dell'app anche
   quando nulla era cambiato — questa versione è pensata per rendere le
   riaperture quasi istantanee. */

var CACHE_NAME = 'lux-comics-v3';
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

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;

  var url = new URL(req.url);
  // le chiamate a Supabase (dati, autenticazione, storage) non passano
  // MAI dalla cache: devono essere sempre live, non è "la corazza" del sito
  if(url.origin !== self.location.origin) return;

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
