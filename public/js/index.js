define(function(require, exports, module) {
  var $ = require('jquery'),

    // 树形目录
    tree = require('./tree.js'),

    // 导航地址
    filePath = require('./filePath.js');

    // 压缩按钮
    compress = require('./compress.js');

    // git 修改
    git = require('./git.js');

    new tree().init();

    new filePath().init();

    compress.init();

    git.init();
    
});