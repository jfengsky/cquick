import add from './add'

// import jQuery from 'jQuery'

console.log(add(2, 3))


console.log(jQuery)

console.log(_)

console.log(Backbone)
class Note extends Backbone.Model {
    constructor() {
        console.log('Note constructor')
        super()
    }

    initialize(){
        console.log('Note init')
    }

    render(){
        console.log('Note render')
    }
}

new Note()