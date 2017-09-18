import { readApifile, writeApifile } from '../file/'

export default async(req: any) => {
  const {
    type,
    data
  } = req.body

  let sendData = {}

  switch(type){
    case 'read':
      sendData = await readApifile()
      return Object.assign({}, sendData)
    case 'write':
      sendData = await writeApifile(data)
      return Object.assign({}, sendData)
  }
}