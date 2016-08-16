/**
 * header 区块
 */

/**
 * 声明Model对象
 * 
 */
const HeaderModel = Backbone.Model.extend({
    defaults: {

        // 主标题
        title: 'todos',

        // 输入框的placeholder
        placeholder: 'What needs to be done?',

        // 输入框默认值
        task: ''
    }
});

// 实例化Model
const headerMod = new HeaderModel()

/**
 * 声明View对象
 * 
 */
const HeaderView = Backbone.View.extend({
    tagName: 'header',
    attributes: {
        id: 'header'
    },
    initialize(){

        // 渲染header
        this.render().$el.appendTo($('#todoapp'))

        // 监听input事件
        this.listenTo(this.model,'change', this.taskChange)
    },
    events:{
        'keypress #new-todo': 'taskKeyPress'
    },
    taskChange(){
        this.initialize()
    },
    render(){
        const headerData = this.model.toJSON()
        this.$el.html(`<h1>${headerData.title}</h1><input id="new-todo" value="${headerData.task}" placeholder="${headerData.placeholder}">`)
        return this
    },
    taskKeyPress(e){

        // 文本框回车
        if( e.keyCode === 13 ){
            this.model.set('task', '')
            
            // 把 $(e.target).val() 传给另一个模块
        }
    }
})

const Header = {

    /**
     * 初始化
     * @return {[type]} [description]
     */
    init() {

        // 直接渲染header
        // 实例化View
        new HeaderView({
            model: headerMod
        })
    }
}

export default Header