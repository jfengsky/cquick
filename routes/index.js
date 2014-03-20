/**
[{
  name: entry.name,
  path: entry.path,
  size: entry.size,
  mtime: entry.mtime
}]
 */


var readdirp = require('readdirp');
var fileTpl = '<!DOCTYPE html><html><head><title>index</title><link rel="stylesheet" href="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/css/bootstrap.min.css"><script src="http://cdn.staticfile.org/angular.js/1.2.10/angular.min.js"></script></head><body><div class="container-fluid"><div class="row"><ol class="breadcrumb"><li><a href="#">home</a></li><li><a href="#">path</a></li></ol></div></div><input type="button" value="build"><div ng-controller="fileListcontrol" class="container-fluid"><table class="table table-hover"><thead><tr><th>Name</th><th>Size</th><th>Last Modify</th></tr></thead><tbody><tr ng-repeat="fileinfo in filelist"><td><span ng-class="{close:\'glyphicon-folder-close\',file: \'glyphicon-file\',open: \'glyphicon-folder-open\'}[fileinfo.type]" class="glyphicon"></span><a href="{{fileinfo.href}}">{{fileinfo.name}}</a></td><td>{{fileinfo.size}}</td><td>{{fileinfo.mtime}}</td></tr></tbody></table></div><script src="inc/src/main.js"></script></body></html>';




module.exports = function(app){
  var files = [],
      filePath = [];

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

  function uniq(arr){
    for(var i=0;i<arr.length;i++)
      for(var j=i+1;j<arr.length;j++)
        if(arr[i]===arr[j]){arr.splice(j,1);j--;}
    return arr
  }

  function folderView(path){
    readdirp({
//      root: './views',
      root: path,
      fileFilter: [ '*.*' ]
    }).on('data', function (entry) {
        files.push(entry);
        filePath.push(entry.path.replace(/\\/g,'/'));
        filePath.push(entry.parentDir.replace(/\\/g,'/'));
      }).on('end', function(){
        var data = [];
        files.forEach(function(element){
          if(element.parentDir != ""){
            data.push({
              type: 'close',
              name: element.parentDir.split('\\')[0],
              path: element.path.replace(/\\/g,'/'),
              size: resize(element.stat.size),
              mtime: formatdate(element.stat.mtime),
              parentdir: element.parentDir,
              href: './' + element.parentDir.split('\\')[0]
            });

          } else {
            data.push({
              type: 'file',
              name: element.name,
              path: element.path.replace(/\\/g,'/'),
              size: resize(element.stat.size),
              mtime: formatdate(element.stat.mtime),
              parentdir: element.parentDir,
              href: './' + filelink(element.name)
//          href: './' + element.name.replace(/\\/g,'/')
            });

          }
        });
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

        uniq(filePath).forEach(function(item){
          var filesplit = item.split('.');
          if(filesplit[filesplit.length - 1] === 'jade'){
            app.get('/' + item.slice(0, -5) + '.html', function(req, res){
              res.render(item, { title: item});
            });
          }
        });

        app.get('/pageinfo', function(req, res){
          res.send({data: data});
        });

        app.get('/', function(req, res){
          res.render('index', { title: 'index', dev: false});
        });

        app.get('/inc', function(req, res){
          res.set('Content-Type', 'text/html');
          res.send(fileTpl);
        });
      });
  }

  folderView('./views');
//  folderView('./inc');
}