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

  function districtArray(arr){
    var result = {},
        data = [];
    for(var i = 0, arrLength = arr.length; i < arrLength; i++){
      result[arr[i].name] = arr[i];
    };
    for(var key in result){
      data.push(result[key]);
    };
    return data;
  };

  function filelink(filename){
    var filesplit = filename.split('.');
    if(filesplit[filesplit.length - 1] === 'jade'){
      return filename.slice(0, -5) + '.html'
    } else {
      return filename
    }
  };
  readdirp({
    root: './views',
    fileFilter: [ '*.*' ]
  }).on('data', function (entry) {
    files.push(entry);
  }).on('end', function(){
    var data = [];
    files.forEach(function(element){
      if(element.parentDir != ""){
        data.push({
          type: 'close',
          name: element.parentDir.split('\\')[0],
          path: "",
          size: resize(element.stat.size),
          mtime: formatdate(element.stat.mtime),
          parentdir: element.parentDir,
          href: './' + element.parentDir.split('\\')[0]
        });

      } else {
        data.push({
          type: 'file',
          name: element.name,
          path: element.path,
          size: resize(element.stat.size),
          mtime: formatdate(element.stat.mtime),
          parentdir: element.parentDir,
          href: './' + filelink(element.name)
//          href: './' + element.name.replace(/\\/g,'/')
        });

      }
    });
//    console.log(follows);
    data.unshift({
      type: 'open',
      name: '../',
      path: '../',
      size: '',
      mtime: '',
      parentdir: '',
      href: ''
    });
    data = districtArray(data);
    console.log(data);
//  console.log(item.replace(/\\/g,'/'));

    app.get('/pageinfo', function(req, res){
      res.send({data: data});
    });

    app.get('/', function(req, res){
      res.render('index', { title: 'index', dev: false});
    });
  });
}