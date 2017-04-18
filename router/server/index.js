import express from 'express'
import content from './html'
import layout from './layout'

const app = express()

app.get('*', (req, res) =>{
  res.status(200).send(layout({title: 'router',content}))
})

app.listen(3200, () => console.log('start server: http://localhost:3200'))