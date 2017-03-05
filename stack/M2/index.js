const hr = {}

hr.clientList = []

hr.listen = function(fn){
    this.clientList.push(fn)
}

hr.trigger = function(){
    for(let i = 0; i < this.clientList.length; i++) {
        const fn = this.clientList[i]
        fn.apply(this, arguments)
    }
}

// 小明
const xiaoming = function(time){
    console.log('小明' + ' time up: ' + time)
}

// 张三
const zhangsan = function(time){
    console.log('张三' + ' time up: ' + time)
}

// 小明去订阅
hr.listen(xiaoming)
hr.listen(zhangsan)

// 发布消息
hr.trigger('2017-03-02')


// const event = {}

// event.listen = function(fn){
//     if(!this.clientList){
//         this.clientList = []
//     }

//     this.clientList.push(fn)
// }

// event.trigger = function(){
//     for(let i = 0; i< this.clientList.length; i++){
//         var fn = this.clientList[i]
//         // fn(arguments)
//         fn.apply(this, arguments)
//         this
//     }
// }

// event.listen(function(time){
//     console.log('time up:'+ time)
// })

// event.trigger('2016/10')





// function add(a, b){
//     console.log(a + b)
// }
// function sub(a, b){
//     console.log(a - b)
// }
//
// add.call(sub,3,1)
// add.apply(sub,[3,1])

// function fun1() {
//     this.a = 123
//     this.add = function(){
//         console.log('f1 add')
//         return this.a
//     }
// }
//
// function fun2(){
//     this.a = 456
// }
//
// var f1 = new fun1()
// var f2 = new fun2()
// console.log(f1.add())
// console.log(f2.a)
// console.log(f1.add.call(f2))





// function fun1(d){
//     this.d = d
//     this.c = 333
//     this.add = function(){
//         return this.a
//     }
//     this.chen = function(){
//         return this.d * 3
//     }
// }

// function fun2(e){
//     this.sub = function(){
//         return this.a - this.b
//     }
//     this.chu = function(){
//         return this.e
//     }
// }

// function fun3(){
//     this.a = 10
//     this.b = 2
//     fun1.call(this, 10)
//     fun2.call(this)
// }

// var f3 = new fun3()

// console.log(f3.add())
// console.log(f3.sub())