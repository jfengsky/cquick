// 路由列表接口
export interface ITroute {
  path: string
  name: string
  component?: any
}

// 异步请求apiList数据接口
export interface ITFetchApiList {
  type: 'save' | 'delete' | 'modify' | 'search'

  // 接口名 save modify时用
  name?: string

  // 接口描述 save modify时用
  desc?: string

  // 接口id，由mongodb生成的 delete search时用
  id?: string
}