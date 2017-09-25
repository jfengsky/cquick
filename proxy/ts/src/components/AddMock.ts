import Vue, { ComponentOptions }  from 'vue'
import { mapState, mapActions } from 'vuex'

import { FETCH_MOCK_LIST } from '../store/request'
import { ITFetchMockList, ITMockListInfo } from '../interface'

interface AddMock extends Vue {
  updata_mockList: (props: Array<ITMockListInfo>) => {}
  desc: string
  code: string
  pid: string
  pname: string
}

export default {
  template: `<div>
                <div>
                  <label>
                    说明:<input type="text" v-model="desc" />
                  </label>
                </div>
                <div>
                  <label>
                    代码:<textarea v-model="code"></textarea>
                  </label>
                </div>
                <button @click="addCode">新增</button>
              </div>`,
  props:["pid", "pname"],
  data(){
    return {
      desc: '',
      code: ''
    }
  },
  components:{},
  methods:{
    ...mapActions([
      'updata_mockList'
    ]),
    async addCode(){
      if(!this.code && !this.desc){
        return false
      }
      let saveState = await FETCH_MOCK_LIST({
        type: 'save',
        pid: this.pid,
        code: this.code,
        desc: this.desc
      })
      this.updata_mockList(saveState)
      this.desc = ''
      this.code = ''
    }
  },
  computed: {

  }
} as ComponentOptions<AddMock>