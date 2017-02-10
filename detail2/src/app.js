import add from './add'

console.log(add(2, 3))


console.log(jQuery)

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