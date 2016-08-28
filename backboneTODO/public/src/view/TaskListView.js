/**
 *
 * Created 16/8/28.
 */

const tpl = `<div class="view">
              <input class="toggle" type="checkbox">
              <label>todo 1</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="todo 1">`

const TaskListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'keydown .edit': 'revertOnEscape',
    'blur .edit': 'close'
  },
  initialize(){
    this.render()
  },
  render(){
    this.$el.html(tpl)
  }
})