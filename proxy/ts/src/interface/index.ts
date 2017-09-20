// 路由列表接口
export interface ITroute {
  path: string
  name: string
  component?: any
}

// 异步请求apiList数据接口
export interface ITFetchApiList {
  type: 'add' | 'delete' | 'modify' | 'search'
  value?: string
  id?: number
}