define(function(require, exports, module) {
  var $ = require('jquery');
  
  function Tree(){


    this._folderTpl = function( _data ){
      var tpl = '';
      if(_data.isDir){
        tpl = '<li>' +
                  '<span class="folder">' +
                    '<i data-name="' + _data.name + '"></i>' +
                    '<em>' + _data.name + '</em>' +
                  '</span>' +
                '</li>';
      } else {
        tpl = '<li>' +
                  '<span class="item">' +
                    '<i></i>' +
                    '<em>' + _data.name + '</em>' +
                  '</span>' +
                '</li>';
      };
      return tpl
    };

    /**
     * 点击展开收起效果
     * @return {[type]} [description]
     */
    this._slide = function(){
      $('#tree').delegate('span.folder i', 'click', function(){
        var $thisSpan = $(this).closest('span');
        if($thisSpan.hasClass('open')){
          // 关闭文件夹
          $thisSpan.removeClass('open');
          $thisSpan.next().slideUp(100);
        } else {
          // 打开文件夹
          $thisSpan.addClass('open');
          $thisSpan.next().slideDown(100);
        }
      });
    };

    this._selete = function(){
      // 点击选中效果
      $('#tree').delegate('span', 'click', function(){
        $('#tree').find('span').removeClass('cur')
        $(this).addClass('cur')
      });
    };

    /**
     * 向服务器请求文件夹里的文件数据
     * @return {[type]} [description]
     */
    this._getFolder = function(){
      var self = this;
      $('#tree').delegate('span.folder i','click', function(){
        var $this = $(this),
            folderName = $this.attr('data-name');

        console.log(folderName);

        // 判断是否请求过
        if($this.attr('data-hasget') !== 'true'){
          $.ajax({
            url: '/files',
            type: 'get',
            data: {},
            success: function (data) {
              var str = '';
              data.forEach(function(_item){
                str += self._folderTpl(_item);
              });
              $this.closest('li').append('<ul>' + str + '</ul>');
              $this.attr('data-hasget', true);
            }
          });
        };
        
      })
    };

    this.init = function(){
      this._getFolder();
      this._slide();
      this._selete();
    }
  };

  new Tree().init();
  
});