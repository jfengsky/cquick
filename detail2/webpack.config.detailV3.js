import webpack from 'webpack'
import path from 'path'

// const appPath = '/ResVacationOnline/js/vacation/app/detail_v2/'
const appPath = './'

const srcPath = path.join(__dirname, './src' + appPath)
const destPaht = path.join(__dirname, './dist' + appPath)

const webpackConfig = {
    entry: {
        bundle: [
            './src/app.js'
        ]
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    externals: {
        // 遇到require这些时, 不需要再编译. 适合那些常用的库, 已经在页面通过<script>引入了, 就无需都打包到一起了
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        Backbone: 'backbone',
        underscore: 'underscore',
        _:'underscore'

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
                // options: {
                //     query: ['es2015', 'es2015-loose', 'stage-0']
                // }
            }
        ]
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
    // devtool: 'source-map'
}

export default webpackConfig