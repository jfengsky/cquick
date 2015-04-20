define(function(require, exports, module) {
  var $ = require('jquery'),

    Compress = {

      /**
       * 选择js文件按钮不再禁用
       * 选择文件夹时按钮禁用
       * @return
       */
      _fileDisable: function() {
        $('#tree').delegate('span', 'click', function() {
          var $this = $(this),
              tag = $this.data('fullpath');
          if ($this.hasClass('folder')) {
            $('#J_getfiles').prop('disabled', true).data('tag','')
          } else {
            $('#J_getfiles').prop('disabled', false).data('tag',tag)
          }
        })
      },

      /**
       * 打包
       * @return
       */
      _build: function(){
        $('#J_getfiles').bind('click', function(){
          var param = $(this).data('tag');

          $.ajax({
            url: '/cmd',
            type: 'post',
            data: {
              cmd: param
            },
            success: function( _data ){
              $('#command .textview').prepend('<div>' + _data + '</div>');
            }
          });

        })
      },

      init: function() {

        // 选择js文件时按钮不再禁用
        this._fileDisable();

        // build 按钮
        this._build();
      }
    };


  module.exports = Compress
});