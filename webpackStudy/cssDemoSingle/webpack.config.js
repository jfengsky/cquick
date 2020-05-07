const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// css打包成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩css
const OptmizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/build.css'
        }),

        new OptmizeCssAssetsWebpackPlugin()
    ],
    mode: 'development'
    // mode: 'production'
}