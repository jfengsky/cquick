/**
 * 顶部model
 * Created on 16/8/26.
 */

const HeaderModel = Backbone.Model.extend({
  defaults: {
    title: '',
    done: false
  }
})

export default HeaderModel