import Vue from 'vue'
import router from './router/'
import store from './store'
import Menus from './components/Menu'
new Vue({
  el: '#app',
  router,
  store,
  template: `
    <div>
      <Menus></Menus>
      <router-view></router-view>
    </div>
  `,
  components: {
    Menus
  }
})