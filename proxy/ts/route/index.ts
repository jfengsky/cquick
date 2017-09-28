import { apilist, mocklist, mockchange } from '../apis'
import apiRoute from './apiRoute'
import mockRoute from './mockRoute'
import fileRoute from './fileRoute'

interface ITApiListInfo {
  _id: any
  name: string
  desc: string
}

export default async (req:any) => {
  let {
    path: reqPath,
    query,
    body
  }:{
    path: string
    query: any
    body: any
  } = req


  let baseRouteList: Array<ITApiListInfo> = await apiRoute({
    type: 'search'
  })

  let routeList: Array<string> = baseRouteList.map( (item:ITApiListInfo) => item.name)

  if(routeList.indexOf(reqPath) >= 0 ){
    return {
      type: 'file'
    }
  }

  switch(reqPath){
    case '/':
      return 'layout.html'
    case apilist:
      let apiRouteData = await apiRoute(body)
      return {
        type: 'data',
        data: apiRouteData
      }
    case mocklist:
      let mockRouteData = await mockRoute(body)
      return {
        type: 'data',
        data: mockRouteData
      }
    case mockchange:
      let mockChangeData = await fileRoute(body)
      return {
        type: 'data',
        data: mockChangeData
      }
    case '/favicon.ico':
      return {
        type:'data',
        data: ''
      }
  }
}