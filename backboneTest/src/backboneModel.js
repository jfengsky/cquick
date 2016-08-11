// 最简单的一个对象
// const Man = Backbone.Model.extend({
//     initialize(){
//         alert('crate')
//     }
// })

// const man = new Man

// 对象赋值的两种方法
// 1.直接定义，设置默认值

// const Man = Backbone.Model.extend({
//     initialize(){
//         alert('create')
//     },
//     defaults: {
//         name: 'aaaa',
//         age: 38
//     }
// })

// const man = new Man
// alert(man.get('name'))


// 赋值时定义，同最简单那

// man.set({
//     name: 'bbb',
//     age: 20
// })
// alert(man.get('name'))

// 对象中的方法

const Man = Backbone.Model.extend({
    initialize(){
        console.log('create')
        this.bind('change:name', ()=>{
            let name = this.get('name')
            console.log('new name is:' + name);
        })
        this.bind('error', (model, error) => {
            console.log(error)
        })
    },
    defaults: {
        name: 'aaa',
        age: 10
    },
    validate (attributes){
        if(attributes.name === ''){
            return 'name不能为空'
        }
    },
    aboutMe(){
        return `my name is ${this.get('name')}`
    }
})

var man = new Man
console.log(man.aboutMe())