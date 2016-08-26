/**
 *
 * Created 16/8/26.
 */

const headTpl = `<h1>todos</h1><input id="new-todo" placeholder="What needs to be done?" autofocus="">`

const Header = Backbone.View.extend({
  el: 'header',
  id: 'header',
  events: {
    'keypress #new-todo': 'reateTask'
  },
  initialize(){
    this.render()
  },
  render(){
    this.$el.html(headTpl)
    return this
  }
})

const HeaderView = {
  init(){
    new Header()
  }
}
export default HeaderView