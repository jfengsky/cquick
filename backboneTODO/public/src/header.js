/**
 * header 区块
 */

import GV from './gv'

import { TASK_UPDATA } from './fetch'

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
        // this.listenTo(this.model,'change', this.taskChange)
    },
    events:{
        'keypress #new-todo': 'taskKeyPress'
    },
    // taskChange(){
    //     this.initialize()
    // },
    render(){
        const headerData = this.model.toJSON()
        this.$el.html(`<h1>${headerData.title}</h1><input id="new-todo" value="${headerData.task}" placeholder="${headerData.placeholder}">`)
        return this
    },
    taskKeyPress(e){
        let desc = $(e.target).val()
        // 文本框回车
        if( e.keyCode === 13 ){
            
            // 数据验证
            if (desc.length < 3){
                return false
            }
            // 告诉服务器添加一个task
            TASK_UPDATA({
                type: 'add',
                desc
            })
            .catch()
            .then( data => {
                if(data.success){
                    const addData = {
                        id: data.id,
                        desc,
                        done: false
                    }
                    GV.list.push(addData)
                    GV.todoTaskCollection.add(addData)

                    // 清空input
                    $('#new-todo').val('')
                }
            })
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