import { ITFetchApiList, ITApiListInfo } from '../src/interface'

import fileRoute from './fileRoute'
import { apiListDB } from '../db'

interface ITSearchResult {
  _id: any
  name: string
  desc: string
  time: number
}


const clearTime = (data: Array<ITSearchResult>): Array<ITApiListInfo> => {
  let tempData: Array<ITApiListInfo> = []
  data.map(({ _id, name, desc }: ITSearchResult) => {
    tempData.push({
      _id,
      name,
      desc
    })
  })
  return tempData
}

export default async (body: ITFetchApiList) => {
  let result: any = {}
  let {
    type,
    desc,
    name,
    id
  } = body
  switch (type) {
    case 'search':
      result = await apiListDB.search()
      return clearTime(result)
    case 'save':
      
      result = await apiListDB.save({ name, desc })
      await fileRoute({
        type: 'add',
        pid: result.insertedIds[0].toString()
      })
      return clearTime(result.ops)
    case 'delete':
      result = await apiListDB.delete({id})
      return result
    case 'modify':
      result = await apiListDB.modify({id, name, desc})
      return result
  }
}