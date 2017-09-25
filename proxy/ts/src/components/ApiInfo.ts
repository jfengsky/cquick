import Vue, { ComponentOptions } from 'vue'
import { mapState, mapActions } from 'vuex'

import AddMock from './AddMock'
import EditMock from './EditMock'

import { ITApiListInfo, ITMockListInfo, ITFileList } from '../interface'

import { FETCH_MOCK_CHANGE } from '../store/request'

interface ApiInfo extends Vue {
  mockId: string
  id: string
  name: string
  desc: string
  apiList: Array<ITApiListInfo>
  mockList: Array<ITMockListInfo>
  fileMockList: Array<ITFileList>
  isEdit: boolean
  showEdit: boolean
}

export default {
  template: `<div>
              <h4>{{name}}</h4><b>{{desc}}</b>
              <span>{{id}}</span>
              <AddMock :pid="id" :pname="name"></AddMock>
              <hr v-show="currentMockList.length" />
              <div v-show="currentMockList.length">
                <select @change="ChangeMock" v-model="mockId">
                  <option v-for="item in currentMockList" :value="item._id">{{item.desc}}</option>
                </select>
                <button @click="clickHandleEdit">编辑</button>
              </div>
              <hr v-show="currentMockList.length" />
              <EditMock v-if="isEdit" :pid="id" :pname="name" :mockId="mockId" :callback="modifyBack"></EditMock>
            </div>`,
  data() {
    return {
      mockId: '',
      id: '',
      name: '',
      desc: '',
      isEdit: false,
      showEdit: false
    }
  },
  mounted: function () {
    let { id } = this.$route.query
    this.id = id
    if(!id){
      location.href= '/'
    }
  },
  beforeUpdate: function () {
    if (!this.name && this.apiList.length) {
      let apiInfo: Array<ITApiListInfo> = this.apiList.filter((item: ITApiListInfo) => {
        return item._id === this.id
      })
      this.name = apiInfo[0].name
      this.desc = apiInfo[0].desc
    }
    if(this.mockList.length){
      this.showEdit = true
    }
    this.fileMockList

    if (!this.mockId && this.fileMockList.length) {
      this.fileMockList.some((item: any): any => {
        if(item.pid === this.id){
          this.mockId = item.mockId
        }
      })
    }
  },
  components: {
    AddMock,
    EditMock
  },
  methods: {
    ...mapActions([]),
    ChangeMock(ev) {
      this.mockId = ev.target.value
      this.isEdit = false
      FETCH_MOCK_CHANGE({
        type: 'modify',
        pid: this.mockId,
        id: this.id
      })
    },
    clickHandleEdit() {
      this.isEdit = true
    },
    modifyBack() {
      this.isEdit = false
    }
  },
  computed: {
    ...mapState([
      'apiList',
      'mockList',
      'fileMockList'
    ]),
    currentMockList() {
      return this.mockList.filter((item:ITMockListInfo) => item.pid === this.id)
    }
  }
} as ComponentOptions<ApiInfo>