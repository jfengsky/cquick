const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
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
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html'
        })
    ],
    devServer: {
        // contentBase: __dirname + "/dist/",
        port: 8080,
        inline:true
    }
}