// Generated by CoffeeScript 1.7.1
$(function($) {
  var FileList;
  FileList = function() {
    var self;
    self = this;

    /*
     *  图标
     */
    this._icon = function(data) {
      spanIcon;
      var spanIcon;
      switch (data.type) {
        case 'open':
          spanIcon = '<span class="glyphicon glyphicon-folder-open"></span>';
          break;
        case 'close':
          spanIcon = '<span class="glyphicon glyphicon-folder-close"></span>';
          break;
        default:
          spanIcon = '<span class="glyphicon glyphicon-file"></span>';
      }
      return spanIcon;
    };

    /*
     *  模板
     */
    this._tpl = function(data) {
      var tpl;
      tpl = '';
      data.forEach(function(item) {
        tpl += '<tr>' + '<td>' + self._icon(item) + '<a href="' + item.href + '">' + item.name + '</a>' + '</td>' + '<td>' + item.size + '</td>' + '<td>' + item.mtime + '</td>' + '</tr>';
      });
      $('#J_filelist').html(tpl);
    };

    /*
     *  初始化
     */
    this.init = function() {
      $.ajax({
        type: 'get',
        url: '../pageinfo',
        catche: false,
        success: function(data) {
          console.log(data);
          self._tpl(data);
        }
      });
    };
  };
  new FileList().init();
});

//# sourceMappingURL=main.map
