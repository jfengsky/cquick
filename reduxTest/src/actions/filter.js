/**
 * 过滤任务action
 */

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTION = 'SHOW_ACTION'

// 显示所有任务
export const showAll = filter => ({
  type: SHOW_ALL
})

// 显示已完成任务
export const showCompleted = filter => ({
  type: SHOW_COMPLETED
})

// 显示未完成任务
export const showAction = filter => ({
  type: SHOW_ACTION
})