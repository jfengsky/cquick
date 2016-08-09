var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by xxxx-xx-xx xx:xx')
    ],
    devServer: {
        contentBase: './',
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}

/*
{
    entry: {
        page1: "./page1",
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        page2: ["./entry1", "./entry2"],
        
        // 如果想保持目录结构，则直接按照目录结构命名
       'subapp1/page': './app/subapp1/page.js',
       'subapp2/page': './app/subapp2/page.js',
    },
    output: {
        path: "dist/js/page",
        publicPath: "/output/",
        filename: "[name].bundle.js"
    }
}
*/

/*
output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/static/',
    filename: "js/[name].bundle.js"
}

path: 打包文件存放的绝对路径
publicPath: 网站运行时的访问路径
filename：打包后的文件名

 */