const Person = Backbone.Model.extend({
    initialize(){
        console.log('create mode')
        this.bind('change:age', () => {
            console.log('name Change:' + this.get('name'))
        })

        this.bind('error', (model, error) => {
            console.log(error);
        })
    },
    validate(attribute){
        if(attribute.age == 100){
            return 'age error'
        }
    },
    defaults: {
        name: 'Bob',
        age: 10
    }
})

var person = new Person()
person.set({
    name: 'joe',
    age: 99
})
console.log(person.toJSON())
person.set({
    name: '',
    age: 100
})