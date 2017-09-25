import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

import { FETCH_MOCK_CHANGE } from '../store/request'
interface MockList extends Vue {
  message: string
}

export default {
  template: `<div>
              <ul>
                <li v-for="item in fileMockList">
                  <div>{{item}}</div>
                  <button @click="deleteData(item)">删除</button>
                </li>
              </ul>
            </div>`,
  data(){
    return {
      
    }
  },
  components:{},
  methods:{
    deleteData(data){
      FETCH_MOCK_CHANGE({
        type: 'delete',
        id: data._id
      })
    },
  },
  computed: {
    
    ...mapState([
      'fileMockList'
    ])
  }
} as ComponentOptions<MockList>