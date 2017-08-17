import Vue from 'vue'
import App from './App'

import router from './routes.js'

import './css/bootstrap.css'

const vm = new Vue({
  el: '#app',
  router,
  data:{
  },
  template: '<App />',
  components: {App}
})