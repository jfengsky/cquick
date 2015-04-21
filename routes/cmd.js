var exec = require('child_process').exec;


var cmd = {

  init: function(_query, _res) {
    var child;

    child = exec('git branch',{
      cwd: '/Users/jiangfeng/www/git/Tour/Front/Front.PC.Online'
    },function(_error, _stdout, _stderr) {
      console.log(_stdout);
      _res.send(_stdout);
      // console.log('stdout: ' + _stdout);
      // console.log('stderr: ' + _stderr);
      // if (_error !== null) {
      //   console.log('exec error: ' + _error);
      // }
    });
  }
};

module.exports = cmd;