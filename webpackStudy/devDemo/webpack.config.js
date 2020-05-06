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
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // 排除这些资源
            exclude: /\.(css|js|html)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:10].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // mode: 'production',

    devServer: {
        contentBase: path.resolve(__dirname, 'build'),

        // gzip压缩
        compress: true,

        port: 4000,

        // 自动打开浏览器
        open: true
    }
}