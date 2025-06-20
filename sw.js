const CACHE_NAME = 'english-course-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/main.js',
  '/units/unit1/slides.html',
  '/units/unit1/flashcards.html',
  '/units/unit1/exercises.html',
  '/games/phonetic-game.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
