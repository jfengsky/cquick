
import initData from './initData'
import LoadBookingInfoV2 from './LoadBookingInfoV2'

import { apilist, mocklist, mockchange } from '../apis'
import apiRoute from './apiRoute'
import mockRoute from './mockRoute'
import fileRoute from './fileRoute'

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
    // 填写页
    // case '/tour/booking/OrderV2/initData':
    //   return await initData(query)
    // case '/bookingnext/LoadBookingInfoV2':
    //   return await LoadBookingInfoV2(body)
  }
}