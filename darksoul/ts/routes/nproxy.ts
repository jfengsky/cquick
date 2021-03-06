import { readfile, writefile } from '../file/'

export default async(req: any) => {
  const {
    type,
    data
  } = req.body

  let sendData = {}

  switch(type){
    case 'read':
      sendData = await readfile()
      return Object.assign({}, sendData)
    case 'write':

      // 为了方便移植(mac和win环境),这里用文件来存储数据

      sendData = await writefile(data)
      return Object.assign({}, sendData)
  }
}