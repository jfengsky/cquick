import { nproxyInfo, apiInfo, apiCode } from './api'

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

export interface ITApiInfo {
  type: 'read' | 'write'
  data?: string
}

export const FETCH_APIINFO = async (data: ITApiInfo) => {
  return await fetch(apiInfo,{
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}


export interface ITApiCode {
  type: 'read' | 'write'
  data?: any
}
export const FETCH_APICODE = async (data: ITApiCode) => {
  return await fetch(apiCode,{
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}