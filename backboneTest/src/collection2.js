var Note = Backbone.Model.extend({
    // 定义默认属性
    defaults: {
        title: 'one note',
        create_at: new Date()
    },
    // 初始化，执行方法
    initialize: function() {
        console.log( '新创建了一条笔记：' + this.get( 'title' ) );
        // 监听所有属性发生变化
        this.on( 'change', function( model, options ) {
            console.log( 'note 属性发生变化' );
        } );
        // 监听title属性发生变化
        this.on( 'change:title', function( model, options ) {
            console.log( 'title 属性值变为：' + options );
        } );

        // 验证事件
        this.on( 'invalid', function( model, error ) {
            console.log( model );
            console.log( error );
        } );
    },
    // 验证
    validate: function( attr, options ) {
        if( attr.title.length < 3 ) {
            return  '笔记标题需要大于3个字符串';
        }
    }
});

var note1 = new Note({
    id: 1,
    title: '学习backbone'
});

var note2 = new Note({
    id: 2,
    title: '学习angular'
});

var note3 = new Note({
    id: 3,
    title: '学习golang'
});

var NoteView = Backbone.View.extend({
    tagName: 'li',
    className: 'item',
    attributes: {
        'data-role': 'list'
    },

    render: function(){
        var data = this.model.toJSON()
        this.$el.html('<span>' + data.title + '</span>')
        return this
    }
})

var NoteCollection = Backbone.Collection.extend({
    // model 类型
    model: Note,
    // 初始化
    initialize: function() {
        // 监听事件
        this.on( {
            // 添加事件
            add: function( model, collection, options ) {
                console.log( 'ID: ' + model.id + '模型添加了到集合里' );
            },
            // 移除事件
            remove: function( model, collection, options ) {
                console.log( 'ID: ' + model.id + '模型从集合里移除了' );
            },
            // 属性变化事件
            change: function( model, options ) {
                console.log( '集合里的模型发生了变化' );
            }
        } );
    }
});



var NoteCollectionView = Backbone.View.extend({
    tagName: 'ul',

    // 初始化
    initialize: function() {
        this.collection.on( 'add', this.addOne, this );
        this.render();
    },

    // 绘制
    render: function() {
        // 循环 underscore 方法
        this.collection.each(this.addOne, this);
        return this;
    },

    // 自定义方法
    addOne: function(note) {
        // 创建视图
        var noteView = new NoteView({model: note});
        this.$el.append( noteView.render().el );
    }

});


var noteCollection = new NoteCollection([note1, note2, note3]);

var noteCollectionView = new NoteCollectionView({collection: noteCollection});

$( '#note_list' ).html( noteCollectionView.el );

var note2 = new Note();
note2.set( 'title', '你好', {validate: true} )