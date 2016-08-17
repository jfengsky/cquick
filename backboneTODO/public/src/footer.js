/**
 * 页脚筛选操作模块
 */



const FooterCollection = Backbone.Collection.extend()

const countObj = {
    type: 'count',
    total: 0,
    txt: 'items left'
}

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

const clearObj = {
    type: 'clear',
    total: 0,
    txt: 'Clear completed'
}


const LeftView = Backbone.View.extend({
    tagName: 'span',
    attributes: {
        id: 'todo-count'
    },
    initialize(){
        this.render()
    },
    render(){
        let json = this.model.toJSON()
        this.$el.html(`<strong>${json.total}</strong> ${json.txt}`)
        return this
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
        // this.$el.append(filterItem.$el)
    }
})

const footerCollection = new FooterCollection([countObj, filterList, clearObj])

const Footer = {
    init(){
        let temp = new FooterCollectionView({
            collection: footerCollection
        })
        $('#todoapp').append(temp.$el)
    }
}

export default Footer