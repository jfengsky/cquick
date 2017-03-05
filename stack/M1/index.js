const hr = {}

hr.clientList = []

hr.listen = function(type, fn){
    if(!this.clientList[type]){
        this.clientList[type] = []
    }
    this.clientList[type].push(fn)
}

hr.trigger = function(){
    let type = arguments[0]
    let fns = this.clientList[type]
    for(let i = 0; i < fns.length; i++){
        fns[i].apply(this, arguments)
    }
}

const zhangsan = function(type, time){
    console.log(`zhangsan(${type}) : ${time}`)
}

const lisi = function(type, time){
    console.log(`lisi(${type}) : ${time}`)
}

hr.listen('js', zhangsan)
hr.listen('php', lisi)

hr.trigger('js', '2017-03-04')
hr.trigger('php', '2017-03-05')

// 模块 份数 单价 总价

// listen('totalPrice')
// listen('singlePrice')
// trigger({count:3})