/**
 * 页脚筛选操作模块
 */
import GV from './gv'

/**
 * 页脚筛选集合对象
 * 
 */

// 完成的任务列表
// let hasDoneTask = []

const FooterCollection = Backbone.Collection.extend()

// 总计

const CountModel = Backbone.Model.extend({
    // defaults: {
    //     type: 'count',
    //     total: 0
    // }
})

// 筛选
const filterList = {
    type: 'filter',
    list:[{
        title: 'All',
        select: true
    },{
        title: 'Active',
        select: false
    },{
        title: 'Completed',
        select: false
    }]
}

/**
 * 总计View对象
 */
const LeftView = Backbone.View.extend({
    tagName: 'span',
    // attributes: {
        
    // },
    id: 'todo-count',
    _tpl(total){
        return `<strong>${total}</strong> items left`
    },
    initialize(){
        this.render()

        // 监听task任务数量变化
        this.listenTo(this.model, 'change', this.countChange)
    },
    render(){
        let json = this.model.toJSON()
        this.$el.html(this._tpl(json.total))
        return this
    },

    /**
     * 修改页面task份数
     */
    countChange(){
        let json = this.model.toJSON()
        $('#todo-count').html(this._tpl(json.total))
    }
})


/**
 * 底部筛选对象
 */
const filterListView = Backbone.View.extend({
    tagName: 'ul',
    // attributes: {
    //     id: 'filters'
    // },
    id: 'filters',
    initialize(){
        this.render()
    },
    render(){
        this.model.map(this.itemRend, this)
    },
    itemRend(itemModel){
        let selectClass = itemModel.select ? 'class="selected"' : ''
        this.$el.append(`<li><a ${selectClass} href="#/${itemModel.title}">${itemModel.title}</a></li>`)
    }
})

/**
 * 清除完成对象
 */
const clearCompleteView = Backbone.View.extend({
    tagName: 'button',
    // attributes: {
        
    // },
    id: 'clear-completed',
    initialize(){
        this.render()
    },
    render(){
        let json = this.model.toJSON()
        this.$el.html(`${json.txt}(${json.total})`)
    }
})

/**
 * 页脚View集合对象
 * @type {[type]}
 */
const FooterCollectionView = Backbone.View.extend({
    tagName: 'footer',
    // attributes: {
        
    // },
    id: 'footer',
    initialize(){
        this.render()
    },
    render(){
        this.collection.map(this.itemRend, this)
        this.$el.appendTo($('#todoapp'))
    },

    /**
     * 渲染每个li
     * @return {[type]} [description]
     */
    itemRend(model){
        let json = model.toJSON()
        let filterItem;
        if(json.type === 'count'){
            filterItem = new LeftView({
                model
            })
        } else if (json.type === 'filter'){
            filterItem = new filterListView({
                model: json.list
            })
        } else {
            filterItem = new clearCompleteView({
                model
            })
        }
        if(filterItem){
            this.$el.append(filterItem.$el)
        }
    }
})

/**
 * 把task进行归类, 返回已完成任务和未完成的任务
 * @param  {Array} data  所有任务
 * @return {Object}         
 */
let splitTask = data => {
    let taskDone = []
    let taskAct = []
    if(data.length){
        data.map( item => {
            if (item.done) {
                taskDone.push(item)
            } else {
                taskAct.push(item)
            }
        })
    }
    return {
        taskDone,
        taskAct
    }
}

const Footer = {
    init(){

        // 所有任务
        let list = GV.list

        // 任务分类
        let {
            taskDone,
            taskAct
        } = splitTask(list)

        // 任务总数Model
        const countObj = new CountModel({
            type: 'count',
            total: taskAct.length
        })

        // 已完成按钮
        const clearObj = {
            type: 'clear',
            total: taskDone.length,
            txt: 'Clear completed'
        }

        const footerCollection = new FooterCollection([countObj, filterList, clearObj])

        new FooterCollectionView({
            collection: footerCollection
        })

        GV.countObj = countObj
    }
}

export default Footer