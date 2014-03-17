var fs = require('fs'),
  url = require('url');

module.exports = function(app){

  var walk = function(dir, done) {
    var results = [];
    var fileItem = {};
    fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var i = 0;
      (function next() {
        var file = list[i++],
          filename = file;
        if (!file) return done(null, results);
        file = dir + '/' + file;
        fs.stat(file, function(err, stat) {
          fileItem = filename + '|'+ file + '|' + stat.isDirectory() + '|' + stat.size + '|' + new Date(stat.mtime).getTime();
          results.push(fileItem);
          next();
        });
      })();
    });
  };



  app.get('/', function(req, res){
    var path = req.query.path;
    console.log(path);
    res.render('index', { title: 'Express' });
  });
}