const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash:8]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash:8]',
            path: resolve(__dirname,'dll/manifest.json')
        })
    ],
    mode: 'production'
}