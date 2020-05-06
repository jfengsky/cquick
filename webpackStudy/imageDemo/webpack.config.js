const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {

                // 图片大小小于8KB，处理成base64
                limit: 8 * 1024
            }
        }]
    },
    plugins: [

    ],
    mode: 'development'
    // mode: 'production'
}