import { ITFetchMockList, ITMockListInfo } from '../src/interface'

import files from '../file'
import { apiListDB, mockListDB } from '../db'


interface ITSearchResult {
  _id: any
  pid: string
  name: string
  desc: string
  time: number
}

interface ITFilter {
  _id: any
  pid: string
  name: string
  desc: string
}

const clearTime = (data: Array<ITSearchResult>): Array<ITFilter> => {
  let tempData: Array<ITFilter> = []
  data.map(({ _id, name, pid, desc }: ITSearchResult) => {
    tempData.push({
      _id,
      desc,
      pid,
      name
    })
  })
  return tempData
}

export default async (body: ITFetchMockList) => {
  let result: any = {}
  let {
    name,
    type,
    desc,
    code,
    pid,
    id
  } = body
  switch (type) {
    case 'save':
      // 先保存code为文件, 返回文件名
      let saveFileName: string = await files.write(name, code)
      result = await mockListDB.save({name: saveFileName, desc, pid })
      return clearTime(result.ops)
      // result = await mockListDB.search(id)
      // return clearTime(result)
    case 'search':
      result = await mockListDB.search(id)
      return clearTime(result)
    case 'readCode':
      let readState = await files.read(name)
      return {
        data: readState
      }
    case 'delete':
      await files.delete(name)
      result = await mockListDB.delete({id})
      return result
    case 'modify':
      await files.write(name, code)
      result = await mockListDB.modify({id, desc})
      return result
  }
}