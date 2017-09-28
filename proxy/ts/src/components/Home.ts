import Vue, { ComponentOptions }  from 'vue'
import { mapState } from 'vuex'

interface Home extends Vue {
  message: string
}

export default {
  template: `<div class="demo">
              <ul>
                <li><a href="http://localhost:3000/tour/booking/OrderV2?shoppingid=6a58df6c49954f4aa3aa0d7633229191" target="_blank">填写页</a></li>
              </ul>
            </div>`,
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