/**
 * Description: filelistTPL
 * Author: jiangfeng(jiang.f@ctrip.com)
 * Date: 2014-03-20 09:48
 *
 */

function fileListTPL() {
//  var tpl = '<!DOCTYPE html>' +
//              '<html>' +
//                '<head>' +
//                  '<title>fileList</title>' +
//                  '<link rel="stylesheet" href="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/css/bootstrap.min.css">' +
//                  '<script src="http://cdn.staticfile.org/angular.js/1.2.10/angular.min.js"></script>' +
//                '</head>'+
//              '</html>'
  return '<!DOCTYPE html><html><head><title>index</title><link rel="stylesheet" href="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/css/bootstrap.min.css"><script src="http://cdn.staticfile.org/angular.js/1.2.10/angular.min.js"></script></head><body><div class="container-fluid"><div class="row"><ol class="breadcrumb"><li><a href="#">home</a></li><li><a href="#">path</a></li></ol></div></div><input type="button" value="build"><div ng-controller="fileListcontrol" class="container-fluid"><table class="table table-hover"><thead><tr><th>文件名</th><th>文件大小</th><th>最后修改时间</th></tr></thead><tbody><tr ng-repeat="fileinfo in filelist"><td><span ng-class="{close:\'glyphicon-folder-close\',file: \'glyphicon-file\',open: \'glyphicon-folder-open\'}[fileinfo.type]" class="glyphicon"></span><a href="{{fileinfo.href}}">{{fileinfo.name}}</a></td><td>{{fileinfo.size}}</td><td>{{fileinfo.mtime}}</td></tr></tbody></table></div><script src="inc/src/main.js"></script></body></html>';

}

exports.fileListTPL = fileListTPL;