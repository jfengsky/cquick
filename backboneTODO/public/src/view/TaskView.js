/**
 *
 * Created 16/8/28.
 */

const taskTpl = `<input id="toggle-all" type="checkbox"><label for="toggle-all">Mark all as complete</label>`

const TaskView = Backbone.View.extend({
  tagName: 'section',
  id: 'main',
  events: {
    'click #toggle-all': 'toggleAll'
  },
  initialize(){
    this.render()

  },
  render(){
    this.$el.html(taskTpl)
    $('#todoapp').append(this.$el)
  },
  toggleAll(){
    debugger
  }
})

export default TaskView