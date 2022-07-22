const CACHE_NAME = "version-1";

//the offline file is shown to the user when the client has no internet connection
const urlsToCache = [ 'index.html', 'offline.html' ];

//self means the service worker itself
//its the same as this. This in the service worker files refers to the service worker
const self = this;

// Install the Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(// wait until caches are open
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                //if there is something to fetch we simply fetch it.
                return fetch(event.request) //return an event for that specific request 
                    .catch(() => caches.match('offline.html')) //otheriwse return the offline page if we are unable to return what was requested
            })
    )
});

// Activate the Service Worker
self.addEventListener('activate', (event) => {
    //remove all the previous caches and just keep the new one
    const cacheWhitelist = [];
    //push all the things that we want to keep
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});