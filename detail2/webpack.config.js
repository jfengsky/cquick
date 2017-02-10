const webpack = require('webpack')

module.exports = {
    entry: {
        bundle: [
            './src/app.js'
        ],
        vendor: ['jquery']
        // vendor: ['jquery', 'underscore', 'backbone']
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        // sourceMapFilename: '[name].map'
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
        noParse: /jquery/,
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
            },
            // {
            //     test: require.resolve('jQuery'),
            //     use: 'imports-loader?define=>false'
            // }
        ]
    },
    resolve: {
        alias: {
            jquery: "./node_modules/jquery/dist/jquery.min.js"
        }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        //     underscore: 'underscore',
        //     _:'underscore',
        //     Backbone: 'backbone'
        //
        // }),
        //
        // new webpack.DllPlugin({
        //     path: 'manifest.json',
        //     name: '[name]_[chunkhash]',
        //     context: __dirname,
        // }),

        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./manifest.json'),
        // }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),

        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),

        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: {
        //         screw_ie8: true,
        //         keep_fnames: true
        //     },
        //     compress: {
        //         screw_ie8: true
        //     },
        //     comments: false
        // })


    ],
    // devtool: 'source-map'
}