const CACHE='albaloshi-github-v5';
const URLS=[
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon-192.png',
  './icon-512.png'
];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
      return res;
    }).catch(()=>caches.match('./index.html')))
  );
});
