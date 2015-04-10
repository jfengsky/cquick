define(function(require, exports, module) {
  var $ = require('jquery');
  





  $('#J_getfiles').bind('click', function(){
    $.ajax({
        url: '/files',
        type: 'get',
        data: {},
        success: function (data) {
          console.log(data)
        }
      });
  })
});