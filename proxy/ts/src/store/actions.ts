import { ITApiListInfo, ITMockListInfo, ITFileList } from '../interface'

export default {
  updata_apiList({commit}: any, data: Array<ITApiListInfo>): void{
    commit('UPDATA_API_LIST', data)
  },
  remove_apiList({commit}: any, data: string): void {
    commit('REMOVE_API_LIST', data)
  },
  modify_apiList({commit}: any, data: ITApiListInfo): void{
    commit('MODIFY_API_LIST', data)
  },

  updata_mockList({commit}: any, data: Array<ITMockListInfo>): void {
    commit('UPDATA_MOCK_LIST', data)
  },
  remove_mockList({commit}: any, data: string): void {
    commit('REMOVE_MOCK_LIST', data)
  },

  updata_fileMockList({commit}: any, data: Array<ITFileList>): void {
    commit('UPDATA_FILE_MOCK_LIST', data)
  }
}