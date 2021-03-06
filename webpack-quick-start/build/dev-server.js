// 基本依赖
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const port = 3400

const app = express()
const compiler = webpack(config)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
})

app.use(devMiddleware)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`listen at http://localhost:${port}`)
})