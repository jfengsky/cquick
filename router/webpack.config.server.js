const webpack = require('webpack')
module.exports = {
  entry: {
    server: './server/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  target: 'node',
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