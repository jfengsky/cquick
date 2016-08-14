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

var MyList = Backbone.Collection.extend({});

var alist = new MyList(list);

var ItemView = Backbone.View.extend({
        tagName: 'li',
        className: 'list-item',
        render: function(){
            this.$el.html(this.model.get('title'))
            return this
        }
    })

var ListView = Backbone.View.extend({
        initialize: function(){
            if(this.collection){
                this.byId = {}
                this.views = []
                this.collection.each(this.registerView, this)
                this.listenTo(this.collection, 'reset', this.resetView)
                this.listenTo(this.collection, 'add', this.addView)
                this.listenTo(this.collection, 'remove', this.removeView)
                this.listenTo(this.collection, 'change', this.changeView)
                this.listenTo(this.collection, 'sort', this.sortView)
            }
        },
        registerView: function(model){
            var view = new ItemView({
                    model: model
                })
            this.byId[model.cid] = view
            this.views.push(view)
        },
        addView: function(model){
            var view = new ItemView({
                model: model
            })
            var at = this.collection.indexOf(model)
            this.byId[model.cid] = view
            var $before = this.views[at -1].$el
            $before.after(view.render().$el)
            this.views.splice(at,0,view)
        },
        render: function(){
            var _this = this
            this.$el.empty()
            _.each(this.views, function( model ){
                var view = new ItemView({
                    model: model
                })
                var $_el = view.render().$el
                _this.$el.append($_el)
            })
            return this
        }
    })

var aView = new ListView({
        el: '#aView',
        collection: alist
    },{
    at: 2
    })

aView.render()

//aList.add({
//    title: 'title added',
//    description: 'description add'
//})
//
//var newDataSource = []