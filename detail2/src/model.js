export default class Man extends Backbone.Model{
    // constructor(){
    //     super()
    // },
    defaults(){
        return {
            name: 'zhangsan',
            age: '38'
        }
    }

    initialize(){
        this.bind('change:name', ()=> {
            let name = this.get('name')
            console.log(`changed Name ${name}`)
        })

        this.bind('error', (model, error) => {
            console.log(model)
            console.log(error)
        })
    }

    validate(attributes){
        debugger
        if(attributes.name == '') {
            return 'name empty'
        }
    }

    aboutMe(){
        return `my Name is ${this.get('name')}, ${this.get('age')} year`
    }

}