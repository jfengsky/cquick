import { ITFetchApiList, ITFetchMockList, ITFileList } from '../interface/'
import { apilist, mocklist, mockchange } from '../../apis'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

// 接口
export const FETCH_API_LIST = async (data: ITFetchApiList): Promise<any> => {
  return await fetch(apilist, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

// mock数据
export const FETCH_MOCK_LIST = async (data: ITFetchMockList): Promise<any> => {
  return await fetch(mocklist, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const FETCH_MOCK_CHANGE = async (data: ITFileList): Promise<any> => {
  return await fetch(mockchange, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}