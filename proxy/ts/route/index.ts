
import initData from './initData'
import LoadBookingInfoV2 from './LoadBookingInfoV2'

import { apilist } from '../apis'
import apiRoute from './apiRoute'

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

    // 填写页
    case '/tour/booking/OrderV2/initData':
      return await initData(query)
    case '/bookingnext/LoadBookingInfoV2':
      return await LoadBookingInfoV2(body)
  }
}