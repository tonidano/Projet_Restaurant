var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/Projet-Restaurant/acceuil.css',
  '/Projet-Restaurant/carte.css',
  '/Projet-Restaurant/photos.css',
  '/Projet-Restaurant/restaurant.css',
  '/Projet-Restaurant/contact.css',
  '/Projet-Restaurant/jquery.js',
  '/Projet-Restaurant/restaurant.js',
  '/Projet-Restaurant/images/background.jpg',
  '/Projet-Restaurant/images/escalope.jpg',
  '/Projet-Restaurant/images/fidelite.jpg',
  '/Projet-Restaurant/images/horloge.png',
  '/Projet-Restaurant/images/icone192.png',
  '/Projet-Restaurant/images/icone512.png',
  '/Projet-Restaurant/images/karaoke.jpg',
  '/Projet-Restaurant/images/logo.png',
  '/Projet-Restaurant/images/pates1.jpg',
  '/Projet-Restaurant/images/pates2.jpg',
  '/Projet-Restaurant/images/pates3.jpeg',
  '/Projet-Restaurant/images/pizza1.jpg',
  '/Projet-Restaurant/images/pizza2.jpg',
  '/Projet-Restaurant/images/pizza3.jpg',
  '/Projet-Restaurant/images/resto1.jpg',
  '/Projet-Restaurant/images/resto2.jpg',
  '/Projet-Restaurant/images/resto3.jpg',
  '/Projet-Restaurant/images/scampi.jpg',
  '/Projet-Restaurant/images/tiramisu.jpg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
