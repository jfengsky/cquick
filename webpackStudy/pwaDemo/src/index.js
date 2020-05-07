

function add(x, y) {
    return x + y
}

console.log(add(1, 2))

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(()=>{
            console.log('success')
        }).catch(()=>{
            console.log('error')
        })
    })
}