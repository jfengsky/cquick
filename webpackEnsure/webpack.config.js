const webpack = require('webpack')

module.exports = {
    entry: {
        bundle: [
            // 'webpack-dev-server/client?http://localhost:8080',
            './src/main.js'
        ],
        vendor: ['jquery']
    },
    output: {
        path: './dist/',
        filename: '[name].js',

        // 异步加载的文件路径
        publicPath: './dist/',

        // 异步加载文件命名
        chunkFilename: "[name].chunk.js",

    },
    externals: {
        // 遇到require这些时, 不需要再编译. 适合那些常用的库, 已经在页面通过<script>引入了, 就无需都打包到一起了
        jQuery: 'jquery'
        
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

        //这个可以使jquery变成全局变量，不用在自己文件require('jquery')了
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
            
        }),

        //第三方库打包生成的文件
        new webpack.optimize.CommonsChunkPlugin('vendor.js'),
    ]
}