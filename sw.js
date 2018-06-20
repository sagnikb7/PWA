self.addEventListener("install",function(event){
console.log("[SW]Installing",event);
});

self.addEventListener("activate",function(event){
    console.log("[SW]Activating",event);
    return self.clients.claim();
    });