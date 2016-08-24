'use strict'

import webpack from 'webpack'
import path from 'path'
const webpackConfig = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by xxxx-xx-xx xx:xx')
  ]
}
export default webpackConfig