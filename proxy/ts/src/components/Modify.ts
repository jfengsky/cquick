import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

import { FETCH_API_LIST } from '../store/request'
import { ITFetchApiList } from '../interface/'

interface Modify extends Vue {
  addApi: () =>{}
  apiList: Array<any>
  apiName: string
  apiDesc: string
}

export default {
  template: `<div class="modify">
    <div>
      <label>
        接口名称:<input type="text" v-model="apiName" />
      </label>
      <br />
      <label>
        接口描述:<textarea v-model="apiDesc"></textarea>
      </label>
      <br />
      <button @click="addApi">新增接口</button>
    </div>
    <hr />
    <div>
      <select>
        <option v-for="item in apiList">{{item.name}}</option>
      </select>
      <button>修改接口</button>
    </div>
  </div>`,
  data(){
    return {
      apiName: '',
      apiDesc: ''
    }
  },
  components:{},
  methods:{
    async addApi(){
      let {
        apiName,
        apiDesc
      } = this
      
      if(apiName && apiDesc){
        let addParam: ITFetchApiList = {
          type: 'save',
          name: apiName,
          desc: apiDesc
        }
        let addState = await FETCH_API_LIST(addParam)
      }
    }
  },
  computed: mapState([
    'apiList'
  ])
} as ComponentOptions<Modify>