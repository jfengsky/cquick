/**
[{
  name: entry.name,
  path: entry.path,
  size: entry.size,
  mtime: entry.mtime
}]
 */


var readdirp = require('readdirp');

module.exports = function(app){
  var files = [];
  readdirp({
    root: './views',
//    directoryFilter: ['!*inc'],
    fileFilter: [ '*.jade' ]
  }).on('data', function (entry) {
    files.push(entry);
  }).on('end', function(){
    var data = [];
    files.forEach(function(element){
//      console.log(element);
      data.push({
        name: element.name,
        path: element.path,
        size: element.stat.size,
        mtime: new Date(element.stat.mtime).getTime(),
        parentdir: element.parentDir
      });

      app.get('/', function(req, res){
        res.send({data:data});
      });

      app.get('/pages.html', function(req, res){
        res.render('index', { title: 'index', dev: false});
      });

    });
  });
}