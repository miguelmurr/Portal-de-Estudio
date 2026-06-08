const CACHE_NAME = 'portal-universitario-v1';
const ASSETS = [
    'index.html',
    'manifest.json'
];

// Instalación inicial del motor en el dispositivo
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Permite que la app cargue de forma fluida consultando la red
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match(e.request);
        })
    );
});