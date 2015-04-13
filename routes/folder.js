var fs = require('fs');

var folder = {
  fullPath: '/Users/jiangfeng/www/git/Tour/Front/Front.PC.Online/src/ResVacationOnline/js/vacation/',

  init: function(_query, _res, _next) {
    var tempPath = this.fullPath + _query.path + '/';

    fs.readdir(tempPath, function(err, list) {
      var files = [];
      if (err) {
        return done(err)
      };
      var pending = list.length;
      if (!pending) {
        return done(null, results)
      };
      list.forEach(function(file) {
        fs.stat(tempPath + '/' + file, function(err, stat) {
          files.push({
            name: file,
            filePath: _query.path + '/' + file,
            isDir: stat.isDirectory()
          });
        });
      });

      // 用很搓的方法去实现异步
      setTimeout(function(){
        _res.send(files);
      }, 200);

    });

  }
}

module.exports = folder;