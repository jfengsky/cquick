import Vue, { ComponentOptions }  from 'vue'
import { mapState, mapActions } from 'vuex'

import { FETCH_API_LIST } from '../store/request'
import { ITroute, ITFetchApiList } from '../interface/'

interface Menu extends Vue {
  routes: Array<ITroute>
  updata_apiList: (prop: Array<any>) => {}
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
    // TODO
    let fetchBack = await FETCH_API_LIST(fetchParam)
    this.updata_apiList(fetchBack)
    debugger
  },
  methods: mapActions([
    'updata_apiList'
  ]),
  // methods:{
  //   ...mapActions([
  //     'fetchApiList'
  //   ])
  // },
  computed: mapState([
    'routes'
  ])
} as ComponentOptions<Menu>