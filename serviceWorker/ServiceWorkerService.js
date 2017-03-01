const SERVICE_WORKER_API = 'serviceWorker'
const SERVICE_WORKER_FILE_PATH = 'service-worker.js'

const isSupportServiceWorker = () => SERVICE_WORKER_API in navigator

const sendMessageToSW = msg => new Promise((resolve, reject) => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = event => {
        if (event.data.error) {
            reject(event.data.error);
        } else {
            resolve(event.data);
        }
    };

    navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg, [messageChannel.port2]);
});

if(isSupportServiceWorker()) {
    navigator.serviceWorker.register(SERVICE_WORKER_FILE_PATH).then(()=>{
        console.log('Load service worker Success.')
    })
    .catch(()=> {
        console.error('Load service worker fail')
    })
    .then(()=> {
        sendMessageToSW('Hello, this is sendMessage')
    })
    .then( data => {
        console.log(data)
    })
    .catch(()=> {
        console.log('send error')
    })
} else {
    console.info('Browser not support Service Worker.')
}