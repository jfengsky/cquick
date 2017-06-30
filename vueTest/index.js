var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue' + new Date(),
    seen: false,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  },
  methods: {
    // changeMessage: function(){
    //   this.message= 'test vue'
    // }
  },
  created: function(){
    console.log('created');
  }
})

Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})