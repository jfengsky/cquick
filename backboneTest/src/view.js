var student1 = {
    name: 'xiaoming',
    age: 12
}
var Model = Backbone.Model.extend()
var studentModel = new Model(student1)

// 创建一个View对象
var View = Backbone.View.extend({
    tagName: 'p',
    className: 'item-name',
    initialize: function(){
        this.render().$el.appendTo('body')
        this.listenTo(this.model, 'change', this.render)
        this.listenTo(this.model, 'destroy', this.remove)
    },
    events: {
        'click span': 'handleSpanClick'
    },
    handleSpanClick: function(){
        this.model.destroy()
    },
    render: function(){
        var json = this.model.toJSON();
        this.$el.html('<h3>' + json.name + '</h3><span>'+ json.age +'</span>')
        return this
    }
})

// 生成一个View实例
new View({
    model: studentModel
})

studentModel.set('name', 'zhangsan')