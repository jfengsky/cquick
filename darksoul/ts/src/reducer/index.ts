import initialState from '../store/'

// action接口
interface ITAction {
  type: string
  value: any
}

export default (state: any = initialState, action: ITAction) => {
  switch(action.type) {
    default:
      return state
  }
}