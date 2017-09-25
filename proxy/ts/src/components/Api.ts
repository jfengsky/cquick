import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'
import { ITApiListInfo } from '../interface'

interface Api extends Vue {
  apiList: Array<ITApiListInfo>
  message: string
  onClick (): void
}
// <router-link :to="/apiInfo?id={{item._id}}">{{item.name}}</router-link>
export default {
  template: `<div class="demo">
    <div v-for="item in apiList">
      <h4>{{item.name}} <b>{{item.desc}}</b></h4>
        <router-link :to="{path: newPath(item._id)}">{{item.name}}</router-link>
      <hr />
    </div>
    <router-view></router-view>
  </div>`,
  data(){
    return {
      message: 'Hello Message'
    }
  },
  components:{},
  methods:{
    onClick: function(): void {
      window.alert(this.message)
    },
    newPath: function(_id: string): string{
      return `/apiInfo?id=${_id}`
    }
  },
  computed: {
    ...mapState([
      'apiList'
    ])
    
  }
} as ComponentOptions<Api>