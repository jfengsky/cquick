const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev.config')

const routeIndex = require('./routes/index')


const port = 3400

const app = express()
const compiler = webpack(config)
const devMiddleware = require('webpack-dev-middleware')(compiler,{
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) =>{
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.use('/', routeIndex)

app.listen(port, (err) => {
  if(err) {
    console.log(err)
    return 
  }
  console.log(`listen at http://localhost:${port}`)
})