define(function(require, exports, module) {
  var $ = require('jquery'),

    FilePath = function() {};

  FilePath.prototype = {

    init: function() {
      $('#tree').delegate('span', 'click', function() {
        var $this = $(this),
          tempFullPath = '';
        if ($this.hasClass('folder')) {
          tempFullPath = $this.find('i').attr('data-name')
        } else {
          tempFullPath = $this.attr('data-fullpath')
        }
        $('#J_fullpath').text(tempFullPath);
      })
    }
  }

  module.exports = FilePath
});