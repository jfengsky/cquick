<template>
  <div class="container-fluid">
    <Navbar></Navbar>
    <router-view></router-view>
    <!-- <Hashlist></Hashlist> -->
  </div>
</template>
<script>
import Navbar from './components/Navbar'
// import Hashlist from './components/Hashlist'

export default {
  data() {
    return {
      currentHash: ''
    }
  },
  // props: ['hash'],
  // beforeCreate(){
  //   console.log('创建前状态')
  // },
  // created(){
  //   console.log('创建完毕状态');
  // },
  // beforeMount(){
  //   console.log('挂载前状态');
  // },
  mounted() {
    // window.addEventListener("hashchange", ev => {
    //   this.currentHash = window.location.hash.replace('#', '')
    // }, false);
  },
  // beforeUpdate(){
  //   debugger
  //   console.log('更新前状态');
  // },
  // updated(){
  //   console.log('更新完成状态');
  // },
  // beforeDestroy(){
  //   console.log('销毁前状态');
  // },
  // destroyed(){
  //   console.log('销毁完成状态');
  // },
  components: {
    Navbar
    // Hashlist
  },
  methods: {

  },
  computed: {

  }
}
</script>
