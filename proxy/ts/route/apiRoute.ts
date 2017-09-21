
import { ITFetchApiList } from '../src/interface'

import { apiListDB } from '../db'

interface ITSearchBack {
  _id: any
  name: string
  desc: string
}

interface ITSearchResult {
  _id: any
  name: string
  desc: string
  time: number
}


const clearTime = (data: Array<ITSearchResult>): Array<ITSearchBack> => {
  let tempData: Array<ITSearchBack> = []
  data.map( ({_id, name, desc}: ITSearchResult) => {
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
  switch(type) {
    case 'search':
    result = await apiListDB.search()
    return clearTime(result)
    case 'save':
    result = apiListDB.save({name, desc})
    return result
  }
}