const Person = Backbone.Model.extend({
    urlRoot: '/user',
    initialize(){
        console.log('create mode')
        this.bind('change:age', () => {
            console.log('name Change:' + this.get('name'))
        })

        // 对所有属性进行监听
        this.on('change', (model) => {
            console.log('model:')
            console.log(model)
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

person.save({
    name: 'joe',
    age: 99
}, {
    success(user){
        console.log(user)
    }
})