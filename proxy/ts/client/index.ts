import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as multer from 'multer'
import * as path from 'path'
import route from '../route'
import reqRoute from './reqRoute'

const port: number = 8989

const app: any = express()
const upload: any = multer()

const server = app.listen(port, ():void=> {
  console.log(`http://localhost:${port}`)
})

const filePath = (fileName: string): string => {
  return path.join(__dirname + '/../data/' + fileName)
}

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./dist'))

app.get('*', async (req: any,res: any) => {
  let data: any = await route(req)
  if( data.type === 'data'){
    res.send(data.data)
  } else {
    res.sendFile(filePath(await reqRoute(req.path)))
    // res.sendFile(filePath(data))
  }
})

app.post('*', async (req: any, res: any) => {
  let data: any= await route(req)
  if( data.type === 'data'){
    res.send(data.data)
  } else {
    res.sendFile(filePath(await reqRoute(req.path)))
    // res.sendFile(filePath(data))
  }
})