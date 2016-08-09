const webpack = require('webpack')
module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        './test/src/app.js'
    ],
    output: {
        path: './test/dist',
        filename: '[name].js'
    },
    externals: {
        // 遇到require这些时, 不需要再编译. 适合那些常用的库, 已经在页面通过<script>引入了, 就无需都打包到一起了
        jquery: 'jQuery'
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
        // new webpack.HotModuleReplacementPlugin(),
        // 打包时间戳在这里加入
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
    ],
    devServer: {
        hot: true
    }
}