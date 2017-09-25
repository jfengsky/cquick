import Vue from 'vue'
import Router from 'vue-router'
import state from '../store/state'
import { ITroute } from '../interface/'
import Home from '../components/Home'
import Api from '../components/Api'
import Modify from '../components/Modify'
import ApiInfo from '../components/ApiInfo'
import MockList from '../components/MockList'

Vue.use(Router)

const cmps: any = {
  Home,
  Api,
  Modify,
  ApiInfo,
  MockList
}

let routes: Array<ITroute> = [...state.routes]

routes.map( (item:ITroute): void  => {
  item.component = cmps[item.name]
})

export default new Router({
  routes: routes
})