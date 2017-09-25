import apiRoute from '../route/apiRoute'
import mockRoute from '../route/mockRoute'
import fileRoute from '../route/fileRoute'

interface ITApiListInfo {
  _id: any
  name: string
  desc: string
}

interface ITMockListInfo {
  _id: any
  desc: string
  name: string
  pid: string
  select: boolean
}

interface ITFileRouteListInfo {
  _id: any
  pid: string
  mockId: string
  time: number
}

export default async (path:string): Promise<any> => {
  if(path === '/'){
    return 'layout.html'
  } else {
    let routes = await apiRoute({
      type: 'search'
    })
    let mocks = await await mockRoute({
      type: 'search'
    })

    let pathMockList: Array<ITMockListInfo> = []
    let pathApiId: string = ''

    routes.map( (item: ITApiListInfo) => {
      if(item.name === path){
        pathApiId = item._id.toString()

        mocks.map( (mockItem:ITMockListInfo) => {
          if(pathApiId === mockItem.pid) {
            pathMockList.push(mockItem)
          }
        })
      }
    })

    let fileMockId: string = ''
    let fileRouteList = await fileRoute({
      type: 'search'
    })

    fileRouteList.some( (item:ITFileRouteListInfo) => {
      if(item.pid === pathApiId ){
        fileMockId = item.mockId
        return true
      }
    })

    let fileName = ''
    pathMockList.some((item:ITMockListInfo) => {
      if(item._id.toString() === fileMockId){
        fileName = item.name
        return true
      }
    })

    if(!fileName){
      fileName = pathMockList[0].name
    }

    return fileName + '.json'
  }
}