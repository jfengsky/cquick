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

  function resize(size){
    if(1 < size / (1024 * 1024)){
      return ((size / (1024 * 1024)).toFixed(2) - 0) + 'mb'
    } else {
      return ((size / 1024 ).toFixed(2) - 0) + 'kb'
    }
  };
  function formatdate(ms){
    var date = new Date(ms);
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  };
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
      if(element.parentDir != ""){
        data.push({
          isfolder: true,
          name: element.parentDir.split('\\')[0],
          path: "",
          size: resize(element.stat.size),
          mtime: formatdate(element.stat.mtime),
          parentdir: element.parentDir
        });
      } else {
        data.push({
          isfolder: false,
          name: element.name,
          path: element.path,
          size: resize(element.stat.size),
          mtime: formatdate(element.stat.mtime),
          parentdir: element.parentDir
        });
      }
//      console.log(data);
//      for(var i = 0, dataLength = data.length; i < dataLength; i++){
//        if(data[i].name ==)
//      }

      app.get('/pageinfo', function(req, res){
        res.send({data:data});
      });

      app.get('/pages.html', function(req, res){
        res.render('index', { title: 'index', dev: false});
      });

    });
  });
}