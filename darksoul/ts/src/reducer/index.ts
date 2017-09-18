import initialState from '../store/'
import { ADD_NPROXY, UP_NPROXY, UP_APILIST} from '../action'


// action接口
interface ITAction {
  type: string
  value: any
}

export default (state: any = initialState, action: ITAction) => {
  switch(action.type) {
    case ADD_NPROXY:
    return Object.assign({}, state, {
      OS: action.value.OS,
      nproxyList: action.value.nproxyList
    })
    case UP_NPROXY:
    return Object.assign({}, state, {
      nproxyList: action.value
    })
    case UP_APILIST:
    return Object.assign({}, state, {
      apiList: action.value
    })
    default:
      return state
  }
}