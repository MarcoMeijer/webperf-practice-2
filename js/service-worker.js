const cacheName = 'v1.0';

const cacheAssets = [
  'index.html',
  'about.html',
  'menu.html',
  'contact.html',
  'news.html',
  'news-detail.html',
  'js/custom.js',
  'js/boostrap.bundle.min.js',
  'js/jquery.min.js',
  'css/bootstrap-icons.css',
  'css/bootstrap.min.css',
  'css/tooplate-cripsy-kitchen.css',
];

self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );

});

self.addEventListener('activate', event => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
