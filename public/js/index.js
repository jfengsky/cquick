define(function(require, exports, module) {
  var $ = require('jquery'),

    // 树形目录
    tree = require('./tree.js'),

    // 导航地址
    filePath = require('./filePath.js');

    new tree().init();

    new filePath().init();
    
});