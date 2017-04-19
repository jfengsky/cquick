const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
// const fs = require('fs')

// 避免打包node内置模块
// const nodeModules = {}
// fs.readdirSync('node_modules')
//   .filter(function (x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function (mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   })

module.exports = {
  entry: {
    server: './server/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()],
  // externals: nodeModules,
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  }
}