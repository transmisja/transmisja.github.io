self.addEventListener('install', function(e) {
  console.log("Service Worker installing.");
    e.waitUntil(
      caches.open('sejm-stream-cache').then(function(cache) {
        return cache.addAll([
          //'/',
          //'/index.html',
          // pliki do cachowania
        ]);
      })
    );
  });
    
  self.addEventListener("activate", event => {
    console.log("Service Worker activating.");
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
