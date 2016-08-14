var data = {
    title: 'title1'
}

var ItemBKModel = Backbone.Model.extend()

var itemModel1 = new ItemBKModel(data)

var ItemBKView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
        var json = this.model.toJSON();
        this.$el.html('<h3>'+ json.title +'</h3>');
        return this
    }
})

var itemView1 = new ItemBKView({
    model: itemModel1
})

itemView1.render().$el.appendTo('body')