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
        this.render().$el.appendTo('#todoapp')
    },
    render(){
        this.$el.html(`<input id="toggle-all" type="checkbox" /><label for="toggle-all">Mark all as complete</label>`)
        return this
    }
})


/**
 * 创建任务视图对象
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
        // this.listenTo(this.collection, 'add', this.addTask)
        // this.collection.on('add', this.itemRend, this)
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
    // ,
    // addTask(model){
    //   debugger
    // }
})

const TaskList = {
    init(){
        let tempData = GV.list
        new TaskTopView()
        let todoTaskCollection = new TaskCollection(tempData)
        let todoTadkCollectionView = new TaskCollectionView({
            collection: todoTaskCollection
        })
        $('#main').append(todoTadkCollectionView.$el)
        GV.todoTaskCollection = todoTaskCollection
    }
}

export default TaskList