import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import { updata_apiList } from './actions'

Vue.use(Vuex)

const mutations = {
  increment(state:any):void {
    state.count++
  },
  upApiList(state: any, data: any): void {
    debugger
  }
}

const actions = {
  updata_apiList({commit}: any, data: any) {
    commit('upApiList')
  }
  // fetchApiList({commit, state}: any, data: any) {
  //   debugger
  //   commit('upApiList')
  // }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})