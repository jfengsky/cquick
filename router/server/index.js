import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
// import content from './html'
import layout from '../views/layout'
import App from '../src/App'

const app = express()

const routes = [
  '/',
  '/about',
  '/topics',
  '/topics/*'
]

app.get('*', (req, res) => {
  const context = {}
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)
  if (!match.isExact) {
    res.status(404).send('404 notfound')
    // res.status(404).send(render(<NoMatch />));
    return
  }
  
  const content = renderToString(
    <StaticRouter location={req.url} context={context} >
      <App />
    </StaticRouter>
  )
  res.status(200).send(layout({ title: 'server',content }))
})

app.listen(3200, () => console.log('start server: http://localhost:3200'))