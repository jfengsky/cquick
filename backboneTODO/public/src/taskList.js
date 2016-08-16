/**
 * 任务list区块
 */

let tempData = [{
  task: 'task1',
  done: false,
  id: 1
},{
  task: 'task2',
  done: false,
  id: 2
}]

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
    render(){
        this.$el.html(`<li class="">
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>todo 1</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="todo 1"></li>`)
        return this
    }
})


/**
 * 创建任务列表集合
 */
const TaskCollection = Backbone.Collection.extend()

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

let todoTaskCollection = new TaskCollection(tempData)
let todoTadkCollectionView = new TaskCollectionView({
    collection: todoTaskCollection
})

const TaskList = {
    init(){
        new TaskTopView()
        let todoTaskCollection = new TaskCollection(tempData)
        let todoTadkCollectionView = new TaskCollectionView({
            collection: todoTaskCollection
        })
        $('#main').append(todoTadkCollectionView.$el)
    }
}

export default TaskList