export default class searchView extends Backbone.View {
    constructor(options){
        _.defaults(options, {
            // tagName: 'div',
            // className: 'document-row',
            el: $('#root'),
            events: {
                'click #demo' : 'tips'
            }
        })
        super(options)
    }
    initialize(){
        this.render()
        // console.log('view')
    }
    render(){
        this.$el.html(`<input type="button" id="demo" value="click me">`)
    }
    tips(){
        alert('tips')
    }
}