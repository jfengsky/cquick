const ListView = Backbone.View.extend({
    el: $('body'),
    events: {
        'click button#add': 'addItem'
    },
    initialize(){
        _.bindAll(this, 'render', 'addItem')
        this.counter = 0
        this.render()
    },
    render(){
        $(this.el).append(`<button id="add">add</button>`)
        $(this.el).append(`<ul></ul>`)
    },
    addItem(){
        this.counter++
        $('ul', this.el).append(`<li>counter:${this.counter}</li>`)
    }
})

const listView = new ListView()