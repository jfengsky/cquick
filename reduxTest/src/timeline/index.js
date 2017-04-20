/**
 * 实现一个timeline中间件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'

let container = null

const timeline = {
  data: [],
  panner(){
    
    if(!container){
      container = document.createElement('div')
      container.style.position = 'fixed'
      container.style.right = 0
      container.style.top = 0
      document.body.appendChild(container)
    }
    ReactDOM.render(<List data={this.data} storeChange={this.timeChange} />,container)
  },
  change(store, action){
    this.data.push({
      second: new Date().getTime(),
      store,
      type: action.type
    })
    this.panner()
  },
  timeChange(second){
    if(!second){
      // 返回最新的store
      
      return this.data[this.data.length - 1]
    }
  },
  init(store){
    this.data.push({
      second: new Date().getTime(),
      store: store.getState(),
      type: 'INIT'
    })
    this.panner()
  }
}

export default timeline