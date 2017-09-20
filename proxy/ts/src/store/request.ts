import { ITFetchApiList } from '../interface/'
import { apilist } from '../../apis'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const FETCH_API_LIST = async (data: ITFetchApiList) => {
  return await fetch(apilist, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then( res => res.json())
}