/* LUX COMICS & MEDUSA COMICS — Service Worker
   Strategia: rete prima di tutto (contenuti sempre aggiornati), con la
   cache come rete di sicurezza solo se la connessione cade a metà
   ricarica — evita la pagina bianca/bloccata quando si ricarica la PWA
   da schermata Home con una connessione instabile. */

var CACHE_NAME = 'lux-comics-v1';
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
  if(event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(function(response){
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
      return response;
    }).catch(function(){
      return caches.match(event.request).then(function(cached){
        return cached || caches.match('./index.html');
      });
    })
  );
});
