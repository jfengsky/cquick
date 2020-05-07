console.log('index.js loaded')
function add(x, y) {
    return x + y
}

console.log(add(2, 2))

document.getElementById('button').onclick= function(){
    import(/* webpackChunkName:"js/test", webpackPrefetch: true */
    './test').then(({reduce})=>{
        console.log(reduce(4,1))
    })
}