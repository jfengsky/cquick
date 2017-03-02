const webpack = require('webpack')

module.exports = {
    entry: {
        bundle: [
            './src/app.js'
        ],
        d3: './demo/D3/index.js',
        d4: './demo/D4/index.js'
    },

    output: {
        path: './dist/',
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
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vendor']
        // })
    ]
}