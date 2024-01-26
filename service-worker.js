self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('sejm-stream-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          // pliki do cachowania
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
