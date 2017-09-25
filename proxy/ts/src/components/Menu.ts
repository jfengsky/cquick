import Vue, { ComponentOptions } from 'vue'
import { mapState, mapActions } from 'vuex'

import { FETCH_API_LIST, FETCH_MOCK_LIST, FETCH_MOCK_CHANGE} from '../store/request'
import { ITroute, ITFetchApiList, ITFetchMockList } from '../interface/'

interface Menu extends Vue {
  routes: Array<ITroute>
  updata_apiList: (prop: Array<any>) => {}
  updata_mockList: (prop: Array<any>) => {}
  updata_fileMockList: (prop: Array<any>) => {}
  fetchApiList:() => {}
  fetchMockList: () =>{}
  fetchFileMockList: ()=>{}
}

export default {
  template: `<div>
              <ul>
                <li v-for="item in routes">
                  <router-link :to="{path: item.path}">{{item.name}}</router-link>
                </li>
              </ul>
            </div>`,
  created: function () {
    this.fetchApiList()
    this.fetchMockList()
    this.fetchFileMockList()
  },
  methods: {
    ...mapActions([
      'updata_apiList',
      'updata_mockList',
      'updata_fileMockList'
    ]),

    // 异步请求apiList
    async fetchApiList(){
      let fetchBack = await FETCH_API_LIST({
        type: 'search'
      })
      this.updata_apiList(fetchBack)
    },
    async fetchMockList(){
      let fetchMockBack = await FETCH_MOCK_LIST({
        type: 'search'
      })
      this.updata_mockList(fetchMockBack)
    },
    async fetchFileMockList(){
      let fetchMockBack = await FETCH_MOCK_CHANGE({
        type: 'search'
      })
      this.updata_fileMockList(fetchMockBack)
    }
  },
  // methods:{
  //   ...mapActions([
  //     'fetchApiList'
  //   ])
  // },
  computed: mapState([
    'routes'
  ])
} as ComponentOptions<Menu>