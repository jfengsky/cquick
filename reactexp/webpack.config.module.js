const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        Todolist: './public/src/Todolist.js'
    },
    output: {
        path: './public/trans/',
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
    }
}