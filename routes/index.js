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
    });
    console.log(data);

  });
}