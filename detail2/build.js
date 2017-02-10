const webpack = require('webpack');
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin())
compiler.run(function(err, stats){
    console.log(err)
    console.log('----')
    console.log(stats)
})