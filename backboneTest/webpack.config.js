const webpack = require('webpack')

module.exports = {
    entry: {
        mainA: './src/mainA.js',
        mainB: './src/mainB.js',
        mainC: './src/mainC.js'
    },
    output: {
        filename: './dist/[name].js'
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
        new webpack.BannerPlugin('This file is created by xxxx-xx-xx xx:xx'),
        new webpack.optimize.CommonsChunkPlugin('./dist/vendor.js')
    ]
}