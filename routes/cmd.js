var exec = require('child_process').exec;


var cmd = {

  init: function(_query, _res) {
    var child;

    child = exec('git pull',{
      cwd: '/Users/jiangfeng/www/git/Tour/Front/Front.PC.Online'
    },function(_error, _stdout, _stderr) {
      console.log(_stdout);
      _res.send(_stdout);
    });
  }
};

module.exports = cmd;