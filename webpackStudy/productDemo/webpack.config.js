const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 11 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs'
                }
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                exclude: /\.(css|js|html|jpg)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
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