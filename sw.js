self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Intercetta le richieste di rete. Basa per passare il controllo PWA di Chrome.
    event.respondWith(
        fetch(event.request).catch(() => new Response('Sei offline.'))
    );
});