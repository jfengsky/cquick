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
    defaults: {
        type: 'count',
        total: 0
    }
})

const countObj = new CountModel()

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

// 清除已完成
const clearObj = {
    type: 'clear',
    total: 0,
    txt: 'Clear completed'
}

/**
 * 总计View对象
 */
const LeftView = Backbone.View.extend({
    tagName: 'span',
    attributes: {
        id: 'todo-count'
    },
    _tpl(total){
        return `<strong>${total}</strong> items left`
    },
    initialize(){
        this.render()
        this.listenTo(this.model, 'change', this.countChange)
    },
    render(){
        let json = this.model.toJSON()
        this.$el.html(this._tpl(json.total))
        return this
    },

    /**
     * 修改份数
     * 
     */
    countChange(){
        $('#todo-count').html(this._tpl(GV.list.length))
    }
})


/**
 * 底部筛选对象
 */
const filterListView = Backbone.View.extend({
    tagName: 'ul',
    attributes: {
        id: 'filters'
    },
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
    attributes: {
        id: 'clear-completed'
    },
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
    attributes: {
        id: 'footer'
    },
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
 * 获取完成的task
 * @param  {Array} data  所有任务
 * @return {Array}      
 */
let getFinishTask = data => {
    let tempTask = []
    if(data.length){
        data.map( item => {
            if (item.done) {
                tempTask.push(item)
            }
        })
    }
    return tempTask
}

const Footer = {
    init(){

        let list = GV.list
        let hasDoneTask = getFinishTask(list)

        // 重新计算任务个数
        // countObj.total = list.length
        // clearObj.total = hasDoneTask.length

        const footerCollection = new FooterCollection([CountModel, filterList, clearObj])

        new FooterCollectionView({
            collection: footerCollection
        })
    }
}

export default Footer