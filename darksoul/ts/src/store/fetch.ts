import { nproxyInfo } from './api'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export interface ITNproxy {
  type: 'read' | 'write'
  data?: string
}

export const FETCH_NPROXY = async (data: ITNproxy) => {
  return await fetch(nproxyInfo,{
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}