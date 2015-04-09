define(function(require, exports, module) {
  var $ = require('jquery');
  
  // TODO 点击展开 收起效果
  $('#tree').delegate('span.folder i', 'click', function(){
    if($(this).hasClass('open')){
      // 关闭文件夹
    } else {
      // 打开文件夹
    }
  });

  
  // TODO 点击选中效果
  $('#tree').delegate('span', 'click', function(){
    $('#tree').find('span').removeClass('cur')
    $(this).addClass('cur')
  })
});