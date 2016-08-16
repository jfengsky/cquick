/**
 * 页脚筛选操作模块
 */
const LeftView = Backbone.View.extend({
    tagName: 'span',
    attributes: {
        id: 'todo-count'
    },
    initialize(){

    },
    render(){
        this.$el.html('<strong>5</strong>items left')
    }
})

const FooterCollection = Backbone.Collection.extend()

const filter = [{
    title: 'All',
    select: true
},{
    title: 'Active',
    select: false
},{
    title: 'Completed',
    select: false
}]

/**
 * 底部筛选对象
 */
const filterListView = Backbone.View.extend({
    tagName: 'li',
    initialize(){
        this.render()
    },
    render(){
        let data = this.model.toJSON()
        let title = data.title
        let selectClass = data.select ? 'class="selected"' : ''
        this.$el.html(`<a ${selectClass} href="#/${title}">${title}</a>`)
        return this
    }
})

/**
 * 页脚View集合对象
 * @type {[type]}
 */
const FooterCollectionView = Backbone.View.extend({
    tagName: 'ul',
    attributes: {
        id: 'filters'
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
        let filterItem = new filterListView({
            model
        })
        this.$el.append(filterItem.$el)
    }
})

const footerCollection = new FooterCollection(filter)

const Footer = {
    init(){
        let temp = new FooterCollectionView({
            collection: footerCollection
        })
        $('body').append(temp.$el)
    }
}

export default Footer