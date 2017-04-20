import { combineReducers } from 'redux'

import { ADD_TODO, TOGGLE_TODO } from '../actions/todo'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTION} from '../actions/filter'

// 起始任务序号，从0开始
let todoIndex = 0

/**
 * 初始变量
 * list:[{
 *  index: 0,
 *  text: 'todo1',
 *  completed: false
 * }]
 */
const initialState = {
  list: [],
  filter: 'SHOW_ALL'
}

export default (state=initialState, action ) => {
  switch(action.type) {
    case ADD_TODO:
      // 添加任务
      return Object.assign({}, state, {
        list: [
          ...state.list,
          {
            index: todoIndex++,
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      // 修改任务状态
      return Object.assign({}, state, {
        list: state.list.map(item => {
          if(item.index === action.index) {
            item.completed = !item.completed
          }
          return item
        })
      })
    
    // 下面3个可以合成一个方法
    case SHOW_ALL:
      return Object.assign({}, state, {
        filter: action.type
      })
    case SHOW_COMPLETED:
      return Object.assign({}, state, {
        filter: action.type
      })
    case SHOW_ACTION:
      return Object.assign({}, state, {
        filter: action.type
      })
    default:
      return state
  }
}