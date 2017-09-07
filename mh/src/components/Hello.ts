interface ITdata {
  message: string
}

export default {
  name: 'hello',
  template: `<div class="hello">
    <h1>{{ message }}</h1>
    <button @click="clicked">Click</button>
  </div>`,
  data (): ITdata {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    fullMessage(){
      return `${this.message} from Typescript`;
    }
  },

  created() {
    console.log('created');
  },

  methods: {
    clicked(){
      console.log('clicked');
    }
  }
}