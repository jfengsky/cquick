/**
 * model
 */
var Note = Backbone.Model.extend({
    defaults:  {
        title: 'one note',
        create_at: new Date()
    },

    // 初始化
    initialize: function(){
        console.log('新创建了一条笔记:' + this.get('title'))

        // 监听所有属性变化
        this.on('change', function(model, options){
            console.log('note 属性发生变化')
        })

        // 监听title属性发生变化
        this.on('change:title', function(model, options){
            console.log('note title 属性变化为:' + options)
        })
    },

    // 监听验证
    invidate: function(attr, options){
        if(attr.title.length < 3){
            return '笔记标题需要大于3个字符串'
        }
    }
})

/**
 * collection
 */
var NoteCollection = Backbone.Collection.extend({
    model: Note
})

var note1 = new Note({
    id: 1,
    title: '1学习backbone'
})

var note2 = new Note({
    id: 2,
    title: '2学习angular'
})

var note3 = new Note({
    id: 3,
    title: '3学习swift'
})

var noteCollection = new NoteCollection([note1, note2])

// 添加模型
noteCollection.add(note3)

// 添加多个模型
//noteCollection.add([note1,note2])

// 设置merge为true，会覆盖掉id为1的模型
noteCollection.add({id: 1, title: 'hello'},{merge: true})

// 删除一个模型
noteCollection.remove(note1)

// 清空集合并重新赋值
noteCollection.reset([note2, note3])

// 弹出最后一个模型
noteCollection.pop()

noteCollection.reset([note2, note3])

// 弹出第一个模型
noteCollection.shift()

// 添加模型到最后
noteCollection.push(note1)

// 添加模型到第一个位置
noteCollection.unshift(note1)

// 添加模型到某个位置
noteCollection.add(note1, {at: 1})

// set 方法
// 如果原集合里存在note2, note3,则会修改原模型
// 如果不存在，则会新增
noteCollection.set([note2, note3])

// 不删除 除了note3 note3以外的模型
noteCollection.set([note2, note3],{remove: false})

// 还有{add: false} {merge:false} 参数可以设置

//获取模型
// 通过id
noteCollection.get(2)

// 通过模型获取
noteCollection.get(note1);

// 通过下标获取
noteCollection.at(2);


console.log(noteCollection)

