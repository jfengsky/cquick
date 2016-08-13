var _obj = {
    title: 'title1',
    descript: 'descript1'
}

var ToDoItemModel = Backbone.Model.extend({

})

var todoItem = new ToDoItemModel(_obj);
var todoItem2 = new ToDoItemModel(_obj);

var ToDoItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'item-class',

    events: {
        'click button': 'handleButtonClick'
    },
    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove)
    },

    render: function(){
        var json = this.model.toJSON();
        this.$el.html('<h3>' + json.title + '</h3><p>' + json.descript + '</p><button>button</button>');
        return this
    },

    handleButtonClick: function(){
        this.model.destroy()
    }
})


var todoItemview1 = new ToDoItemView({
    model: todoItem
})

var todoItemview2 = new ToDoItemView({
    model: todoItem2
})

todoItemview1.render().$el.appendTo('body')
todoItemview2.render().$el.appendTo('body')


var list = [
    {
        title: 'title1',
        description: 'description1'
    },{
        title: 'title2',
        description: 'description2'
    },{
        title: 'title3',
        description: 'description3'
    },{
        title: 'title4',
        description: 'description1'
    }
]

var myList = Backbone.Collection.extend({

})

var alist = new myList(list);

var foo = alist.find(function(model){
    return model.get('title') === 'title1'
})

var foo2 = alist.filter(function(model){
    return model.get('description') === 'description1'
})

var foo3 = alist.where({
    description: 'description1'
}, false)