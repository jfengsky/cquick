import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

interface Home extends Vue {
  message: string
}

export default {
  template: '<div class="demo">{{message}}</div>',
  data(){
    return {
      message: 'Hello Message'
    }
  },
  components:{},
  methods:{
  },
  computed: {

  }
} as ComponentOptions<Home>