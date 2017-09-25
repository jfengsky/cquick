import Vue, { ComponentOptions } from 'vue'
import { mapState, mapActions } from 'vuex'

import { FETCH_API_LIST } from '../store/request'
import { ITFetchApiList, ITApiListInfo } from '../interface/'

interface AddApi extends Vue {
  apiName: string
  apiDesc: string
  addApi: () => {}
  updata_apiList: (prop: Array<any>) => {}
}

export default {
  template: `<div>
              <label>
                接口名称:<input type="text" v-model="apiName" />
              </label>
              <br />
              <label>
                接口描述:<textarea v-model="apiDesc"></textarea>
              </label>
              <br />
              <button @click="addApi">新增接口</button>
            </div>`,
  data() {
    return {
      apiName: '',
      apiDesc: ''
    }
  },
  methods: {
    ...mapActions(['updata_apiList']),
    async addApi(): Promise<any> {
      let {
        apiName,
        apiDesc
      } = this

      if (apiName && apiDesc) {
        let addParam: ITFetchApiList = {
          type: 'save',
          name: apiName,
          desc: apiDesc
        }
        let addState = await FETCH_API_LIST(addParam)
        this.updata_apiList(addState)
        this.apiName = ''
        this.apiDesc = ''
      }
    }
  }
} as ComponentOptions<AddApi>