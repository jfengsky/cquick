import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

interface Modify extends Vue {
  apiList: Array<any>
}

export default {
  template: `<div class="modify">
    <div>
      <label>
        接口名称:<input type="text" />
      </label>
      <br />
      <label>
        接口描述:<textarea></textarea>
      </label>
      <br />
      <button>新增接口</button>
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
      message: 'Hello Modify'
    }
  },
  components:{},
  methods:{},
  computed: mapState([
    'apiList'
  ])
} as ComponentOptions<Modify>