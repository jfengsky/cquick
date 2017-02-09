const webpack = require('webpack')

module.exports = {
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'es2015-loose', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        extensions: ['','.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.js')
    ]

}