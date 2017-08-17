import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Api from './components/Api'
import Modify from './components/Modify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Modify
    },
    {
      path: '/api',
      component: Api
    },
    {
      path: '/modify',
      component: Home
    }
  ]
})