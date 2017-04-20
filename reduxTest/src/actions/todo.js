/**
 * 添加，完成任务action
 */

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

// 添加任务
export const addTodo = text => ({
  type: ADD_TODO,
  text
})

// 修改任务状态
export const toggleTodo = ({index}) => ({
  type: TOGGLE_TODO,
  index
})