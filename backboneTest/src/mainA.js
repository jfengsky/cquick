const ListView = Backbone.View.extend({
    el: $('body'),

    initialize(){
        _.bindAll(this, 'render')
        this.render()
    },
    render(){
        $(this.el).append(`<ul><li>first</li></ul>`)
    }
})

const listView = new ListView()