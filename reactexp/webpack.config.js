const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        bundle: [
            './public/src/app.js'
        ]
    },
    output: {
        path: './public/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
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
        })
    ]
}