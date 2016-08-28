/**
 *
 * Created 16/8/26.
 */

const headTpl = `<h1>todos</h1><input id="new-todo" placeholder="What needs to be done?" autofocus="">`

const Header = Backbone.View.extend({
  tagName: 'header',
  id: 'header',
  events: {
    'keypress #new-todo': 'reateTask'
  },
  initialize(){
    this.render()
  },
  render(){
    this.$el.html(headTpl)
    $('#todoapp').append(this.$el)
  },
  reateTask(){
    debugger
  }
})

const HeaderView = {
  init(){
    new Header()
  }
}
export default HeaderView