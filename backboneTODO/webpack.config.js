const webpack = require('webpack')
const moment = require('moment')

const buildTime = moment().format("YYYY-MM-DD HH:mm")
const bannerText = ` ${buildTime} `
module.exports = {
    entry: {
        main: [
            './public/src/main.js'
        ]
    },
    output: {
        path: './public/dist',
        filename: '[name].js'
    },
    // externals: {
    //     // 遇到require这些时, 不需要再编译. 适合那些常用的库, 已经在页面通过<script>引入了, 就无需都打包到一起了
    //     Backbone: 'backbone',
    //     underscore: 'underscore',
    //     _:'underscore',
    //     jQuery: 'jquery'
        
    // },
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
        // new webpack.HotModuleReplacementPlugin(),
        // 打包时间戳在这里加入
        new webpack.BannerPlugin(bannerText),

        //这个可以使jquery变成全局变量，不用在自己文件require('jquery')了
        // new webpack.ProvidePlugin({
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     _:'underscore',
        //     Backbone: 'backbone'
            
        // }),

        //这是妮第三方库打包生成的文件
        new webpack.optimize.CommonsChunkPlugin('vendor.js'),

        // new webpack.optimize.OccurenceOrderPlugin(),

        // new webpack.optimize.UglifyJsPlugin()
    ]
    // ,
    // devtool: 'source-map'
}