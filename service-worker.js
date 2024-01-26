self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('moja-pwa-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          // tutaj dodaj inne pliki, które chcesz cachować
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
