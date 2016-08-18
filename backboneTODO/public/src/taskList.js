/**
 * 任务list区块
 */
import GV from './gv'

/**
 * 选择所有按钮
 */
const TaskTopView = Backbone.View.extend({
    tagName: 'section',
    attributes: {
        id: 'main'
    },
    initialize(){
        this.render()
    },
    render(){
        this.$el.html(`<input id="toggle-all" type="checkbox" /><label for="toggle-all">Mark all as complete</label>`)
        return this
    }
})


/**
 * 创建任务列表视图对象
 * @type {[type]}
 */
const TaskView = Backbone.View.extend({
    tagName: 'li',
    className: '',
    initialize(){
      this.render()
    },
    render(){
        let {
          desc,
          done
        } = this.model.toJSON()

        let hasCheck = done ? 'checked' : ''
        let hasCheckClass = done ? 'class="completed"' : ''

        this.$el.html(`<li ${hasCheckClass}>
          <div class="view">
            <input class="toggle" type="checkbox" ${hasCheck}>
            <label>${desc}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="todo 1"></li>`)
        return this
    }
})


/**
 * 创建任务列表集合
 */
const TaskCollection = Backbone.Collection.extend({
  initialize(){
    this.on({
      add(model, collection, options){
        const newTask = new TaskView({
          model
        })
        $('#todo-list').prepend(newTask.$el)
        // 修改任务数量
        GV.countObj.set('total',collection.size())
      },
      done(model, collection, options){
        console.log('task done')
      }
    })
  }
})

/**
 * 创建集合视图对象
 * @type {[type]}
 */
const TaskCollectionView = Backbone.View.extend({
    tagName: 'ul',
    attributes: {
        id: 'todo-list'
    },
    initialize(){
        this.render()
    },
    render(){
        this.collection.each( this.itemRend, this)
    },

    /**
     * 渲染每个model
     * @param  {Object} model 
     * @return {[type]}       [description]
     */
    itemRend(model){
        // 创建一个视图
        const tempTaskView = new TaskView({
            model
        })
        this.$el.append(tempTaskView.render().$el)
    }
})

const TaskList = {
    init(){
        let tempData = GV.list

        // task主容器DOM
        let taskListContent = new TaskTopView()

        // 生成任务列表
        let todoTaskCollection = new TaskCollection(tempData)
        let todoTadkCollectionView = new TaskCollectionView({
            collection: todoTaskCollection
        })

        // 把任务列表加入到task主容器中
        taskListContent.$el.append(todoTadkCollectionView.$el)

        // 把task主容器一次放入页面中
        taskListContent.$el.appendTo('#todoapp')

        // 任务列表集合存入全局变量，方便其它模块添加task
        GV.todoTaskCollection = todoTaskCollection
    }
}

export default TaskList