const _self = this;

_self.addEventListener('install', function () {
    console.log('Install success');
});

_self.addEventListener('activate', function () {
    console.log('Activated');
});

_self.addEventListener('message', function(event){
    console.log('message：' + event.data)
})

_self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
        client.postMessage('Service worker attached.');
    })
});