/**
 * 所有接口
 */

interface ITApiInfoList {
  desc: string
  fileName: string
}

/**
 * 接口数据
 */
export interface ITApiListInfo {
  id: number
  name: string
  desc: string
  list: Array<ITApiInfoList>
}

/**
 * 代理接口数据
 */
export interface ITNproxyInfo {
  pattern: string
  responder: string
}

export interface ITApiCodeInfo {
  id: number
  fileName: string
  desc: string
  code: string
}