const webpack = require('webpack')

module.exports = {
    entry: {
        // bundle: [
        //     './public/src/app.js'
        // ],
        // d3: './demo/D3/index.js',
        // d4: './demo/D4/index.js',
        // d5: './demo/D5/index.js',
        // d6: './public/demo/D6/index.js',
        // d7: './public/demo/D7/index.js',
        // d8: './public/demo/D8/index.js',
        d9: './public/demo/D9/index.js'
    },

    output: {
        path: './public/dist/',
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