import Vue, { ComponentOptions } from 'vue'
import { mapState, mapActions } from 'vuex'

import AddApi from './AddApi'
import { FETCH_API_LIST } from '../store/request'
import { ITFetchApiList, ITApiListInfo } from '../interface/'

interface Modify extends Vue {

  // 删除一条接口
  remove_apiList: (prop: string) =>{}
  modify_apiList: (prop: any) => {}
  // 接口信息列表
  apiList: Array<ITApiListInfo>

  // 当前填写（编辑）的接口名
  apiName: string

  // 当前填写（编辑）的接口描述
  apiDesc: string

  // 当前选择的接口id
  currentId: string,

  // 是否编辑状态
  isModify: boolean
}

export default {
  template: `<div class="modify">
    <AddApi></AddApi>
    <hr />
    <div>
      <select @change="ChangeApi">
        <option v-for="item in apiList" :value="item._id">{{item.name}}|{{item.desc}}</option>
      </select>
      <button @click="modifyApi">修改</button>
    </div>
    <div v-if="isModify">
    <p>id: {{currentId}}</p>
    <label>
      接口名称:<input type="text" v-model="apiName" />
    </label>
    <br />
    <label>
      接口描述:<textarea v-model="apiDesc"></textarea>
    </label>
    <button @click="editApi">修改接口</button>
    <button @click="removeApi">删除接口</button>
    </div>
  </div>`,
  data() {
    return {
      apiName: '',
      apiDesc: '',
      currentId: null,
      isModify: false
    }
  },

  updated: function(){
    if(!this.currentId && this.apiList.length){
      this.currentId = this.apiList[0]._id
    }
  },

  components:{
    AddApi
  },
  methods: {
    ...mapActions(['remove_apiList', 'modify_apiList']),
    modifyApi(): void {
      this.apiList.map( (item:ITApiListInfo) => {
        if(item._id === this.currentId){
          this.apiName = item.name
          this.apiDesc = item.desc
          this.isModify = true
        }
      })
    },
    ChangeApi(ev): void {
      this.currentId = ev.target.value
    },
    async removeApi(): Promise<any> {
      let { currentId } = this
      if(currentId){
        let removeParam: ITFetchApiList = {
          type: 'delete',
          id: currentId
        }
        let removeState = await FETCH_API_LIST(removeParam)
        if(removeState.ok === 1){
          this.remove_apiList(currentId)
          this.isModify = false
        }
      }
    },
    async editApi(): Promise<any> {
      let { currentId, apiName, apiDesc } = this
      if( currentId && apiName && apiDesc ){
        let editParam: ITFetchApiList = {
          type: 'modify',
          id: currentId,
          name: apiName,
          desc: apiDesc
        }

        let removeState = await FETCH_API_LIST(editParam)
        if(removeState.ok === 1){
          this.modify_apiList({
            _id: currentId,
            name: apiName,
            desc: apiDesc
          })
          this.isModify = false
        }
      }
    }
  },
  computed: mapState([
    'apiList'
  ])
} as ComponentOptions<Modify>