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
      sendData = await writefile(data)
      return Object.assign({}, sendData)
  }
}