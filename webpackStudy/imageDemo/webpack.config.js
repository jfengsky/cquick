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
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {

                // 图片大小小于8KB，处理成base64
                limit: 11 * 1024,

                name: '[hash:10].[ext]',
                // esModule: false
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
    // mode: 'production'
}