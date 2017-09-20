import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

import { FETCH_API_LIST } from '../store/request'
import { ITroute, ITFetchApiList } from '../interface/'

interface Menu extends Vue {
  routes: Array<ITroute>
}

export default {
  template: `<div>
              <ul>
                <li v-for="item in routes">
                  <router-link :to="{path: item.path}">{{item.name}}</router-link>
                </li>
              </ul>
            </div>`,
    created: async function (){
    // 异步请求apiList
    let fetchParam: ITFetchApiList = {
      type: 'search'
    }
    let fetchBack = await FETCH_API_LIST(fetchParam)
  },
  computed: mapState([
    'routes'
  ])
} as ComponentOptions<Menu>