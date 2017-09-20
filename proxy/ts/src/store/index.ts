import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

const mutations = {
  increment(state:any):void {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations
})