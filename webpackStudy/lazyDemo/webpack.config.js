const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    // 多入口
    entry: './src/js/index.js',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'development',
    
}