export const ADD_NPROXY = 'ADD_NPROXY'
export const UP_NPROXY = 'UP_NPROXY'

export const add_nproxy = (data: any) => ({
  type: ADD_NPROXY,
  value: data
})

export const up_nproxy = (data: any) => ({
  type: UP_NPROXY,
  value: data
})