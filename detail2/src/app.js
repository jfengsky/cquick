// import add from './add'
//
// // import jQuery from 'jQuery'
//
// console.log(add(2, 3))
//
//
// console.log(jQuery)
//
// console.log(_)
//
// console.log(Backbone)
// class Note extends Backbone.Model {
//     constructor() {
//         console.log('Note constructor')
//         super()
//     }
//
//     initialize(){
//         console.log('Note init')
//     }
//
//     render(){
//         console.log('Note render')
//     }
// }
//
// new Note()

import Man from './model'

import searchView from './view'

const man = new Man()

// console.log(man)
man.set({name: 'lisi', age: '28'})
console.log(man.get('name'))
console.log(man.aboutMe())
man.set({name: ''})

let obj = {
    name: "zhaowu",
    age: 8
}

new searchView({
    model: obj
})