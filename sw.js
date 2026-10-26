const CACHE='storyvault-v1-1-2026-10';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);if(u.origin!==location.origin||e.request.method!=='GET')return;
 // Network-first for HTML lets deployed updates reach installed mobile users.
 const documentRequest=e.request.mode==='navigate'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/');
 if(documentRequest){e.respondWith(fetch(e.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy));}return response}).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))));return;}
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy));}return response;})));
});
