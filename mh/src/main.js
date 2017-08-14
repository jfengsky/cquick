import Vue from 'vue'
import App from './App'

const vm = new Vue({
  el: '#app',
  data:{
    hash: ''
  },
  template: '<App hash={hash} />',
  components: {App}
})

window.addEventListener("hashchange", function(ev){
  vm.hash = window.location.hash.replace('#','')
}, false);