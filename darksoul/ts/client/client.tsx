import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as multer from 'multer'

import { ITLayout, layout } from '../views/layout'
import { postList, nproxyInfo } from '../src/store/api'
import nproxyRoute from '../routes/nproxy'


const clientPort: number = 4100
const app: any = express()
const upload: any = multer()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('*', (req: any, res: any) => {

  const clientProp: ITLayout = {
    title: 'client',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(clientProp))
})

const success: any = { state: 0, data: null}

app.post('*', async (req: any, res: any) => {
  if(postList.indexOf(req.path) >= 0){
    switch(req.path){
      case nproxyInfo:
        let sendData = await nproxyRoute(req)
        return res.send(Object.assign({}, success, sendData))
    }
  } else {
    res.sendStatus('404')
  }
})

app.listen(clientPort, () => console.log(`start client: http://localhost:${clientPort}`))