import Vue, { ComponentOptions }  from 'vue'
import { mapState, mapActions } from 'vuex'

import { FETCH_MOCK_LIST } from '../store/request'
import { ITFetchMockList, ITMockListInfo } from '../interface'


interface EditMock extends Vue {
  fetchCode: () => {}
  callback: () => {}
  remove_mockList: (props: string) => {}
  mockList: Array<ITMockListInfo>
  desc: string
  code: string
  pid: string
  mockId: string
  pname: string

  // 文件名
  name: string
}

export default {
  template: `<div>
                {{name}}
                <div>
                  <label>
                    说明:<input type="text" v-model="desc" />
                  </label>
                </div>
                <div>
                  <label>
                    代码:<textarea v-model="code" style="width: 80%; height: 600px"></textarea>
                  </label>
                </div>
                <button @click="modifMock">编辑</button>
                <button @click="deleteMock">删除</button>
              </div>`,
  props:["pid", "pname", "mockId", "callback"],
  data(){
    return {
      desc: '',
      code: '',

      // 文件名
      name: ''
    }
  },
  components:{},
  mounted: function(){
    this.mockList.map(({_id, desc, name}: ITMockListInfo)=> {
      if(_id === this.mockId) {
        this.desc = desc
        this.name = name
      }
    })
    
    // 请求code
    this.fetchCode()

  },
  methods:{
    ...mapActions(['remove_mockList']),
    async modifMock(){
      let saveState = await FETCH_MOCK_LIST({
        name: this.name,
        type: 'modify',
        pid: this.pid,
        code: this.code,
        desc: this.desc,
        id: this.mockId
      })
      if(saveState.ok === 1){

        // 偷懒
        window.location.reload()
        // this.callback()
      }
    },
    async deleteMock(){
      let deleteState = await FETCH_MOCK_LIST({
        type: 'delete',
        id: this.mockId,
        name: this.name
      })
      if(deleteState.ok === 1){
        this.remove_mockList(this.mockId)
        this.callback()
      }
    },
    async fetchCode(){
      let codeState = await FETCH_MOCK_LIST({
        type: 'readCode',
        name: this.name
      })
      this.code = codeState.data
    }
  },
  computed: mapState([
    'apiList',
    'mockList'
  ])
} as ComponentOptions<EditMock>