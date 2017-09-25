import { ITFileList, ITApiListInfo } from '../src/interface'

import { fileListDB } from '../db'

// interface ITSearchResult {
//   _id: any
//   name: string
//   desc: string
//   time: number
// }


// const clearTime = (data: Array<ITSearchResult>): Array<ITApiListInfo> => {
//   let tempData: Array<ITApiListInfo> = []
//   data.map(({ _id, name, desc }: ITSearchResult) => {
//     tempData.push({
//       _id,
//       name,
//       desc
//     })
//   })
//   return tempData
// }

export default async (body: ITFileList) => {
  let result: any = {}
  let {
    type,
    pid,
    id
  } = body
  switch (type) {
    case 'search':
      result = await fileListDB.search()
      return result
    case 'add':
      result = await fileListDB.save({ pid })
      return result
    case 'delete':
      result = await fileListDB.delete({id})
      return result
    case 'modify':
      result = await fileListDB.modify({id, pid})
      return result
  }
}