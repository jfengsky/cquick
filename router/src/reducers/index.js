const initialState = {
  count: 0
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'ADD':
      state.count++
      return Object.assign({}, state, {
        count
      })
    default:
    return state
  }
}