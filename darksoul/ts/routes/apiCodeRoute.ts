import { readApifile, writeApifile, readApiCodefile, writeApiCodefile } from '../file/'

import { ITApiListInfo } from '../interfaces'

export default async(req: any) => {
  const {
    type,
    data
  } = req.body

  let sendData = {}

  switch(type){
    case 'read':
      sendData = await readApiCodefile()
      return Object.assign({}, sendData)
    case 'write':
      let {
        id,
        fileName,
        desc,
        code
      } = data

      let isAdd = false
      // 没有文件名临时生成一个
      if(!fileName){
        fileName = 'a' + new Date().getTime()
        isAdd = true
      }
      

      await writeApiCodefile({
        fileName,
        code
      })

      let apiFile = await readApifile()
      apiFile.data.list.map( ({id:_id, list}:ITApiListInfo ) => {
        if(id === _id){
          if(isAdd){
            list.push({
              fileName,
              desc
            })
          } else {
            list.map( (listItem: any) => {
              if(listItem.fileName === fileName){
                listItem.desc = desc
              }
            })
          }
        }
      })
      await writeApifile(JSON.stringify(apiFile.data.list))
      return Object.assign({}, apiFile)
  }
}