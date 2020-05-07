const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: ['./src/js/index.js' /* './src/index.html' */],
    output: {
        filename: 'js/build.[contenthash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.less$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },
                    {
                        test: /\.css/,
                        use: [
                            'style-loader',
                            'css-loader',
                        ]
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '50'
                            }
                        }
                    ]
                ],
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 11 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs'
                }
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                exclude: /\.(css|js|html|jpg)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // mode: 'production',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),

        // gzip压缩
        compress: true,

        port: 4000,

        // 自动打开浏览器
        open: true,

        // 开启HMR
        hot: true
    }
}