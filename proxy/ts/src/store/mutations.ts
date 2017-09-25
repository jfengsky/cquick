import { ITApiListInfo, ITMockListInfo } from '../interface'

export default {
  UPDATA_API_LIST(state: any, data: Array<ITApiListInfo>): void {
    state.apiList = [...state.apiList,...data]
    return state
  },
  REMOVE_API_LIST(state: any, data: string): void {
    state.apiList = state.apiList.filter((item: ITApiListInfo): boolean => item._id !== data)
    return state
  },
  MODIFY_API_LIST(state: any, data: ITApiListInfo): void {
    state.apiList.map((item: ITApiListInfo): void => {
      if(item._id === data._id){
        item.name = data.name
        item.desc = data.desc
      }
    })
    return state
  },

  UPDATA_MOCK_LIST(state: any, data: Array<ITMockListInfo>): void {
    state.mockList = [...state.mockList, ...data]
    return state
  },
  REMOVE_MOCK_LIST(state: any, data: string): void {
    let tempMockList: Array<ITMockListInfo> = []
    state.mockList.map((item:ITMockListInfo): void => {
      if(item._id !== data){
        tempMockList.push(item)
      }
    })
    state.mockList = tempMockList
    return state
  },

  UPDATA_FILE_MOCK_LIST(state: any, data: Array<any>): void{
    state.fileMockList = [...state.fileMockList, ...data]
    return state
  }
}