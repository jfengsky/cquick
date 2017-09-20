import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

interface Api extends Vue {
  message: string
  onClick (): void
}

export default {
  template: '<div class="demo"><h1>Api</h1></div>',
  data(){
    return {
      message: 'Hello Message'
    }
  },
  components:{},
  methods:{
    onClick: function(): void {
      window.alert(this.message)
    }
  },
  computed: mapState([
    'count'
  ])
} as ComponentOptions<Api>