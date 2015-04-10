var express = require('express');
var router = express.Router();
// var readdirp = require('readdirp');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




var files = [];
var dir = '/Users/jiangfeng/www/git/Tour/Front/Front.PC.Online/src/ResVacationOnline/js/vacation/app/';
fs.readdir(dir, function(err, list){
  if (err) {
    return done(err)
  };
  var pending = list.length;
  if (!pending) {
    return done(null, results)
  };
  list.forEach(function(file) {
    console.log(file);
    fs.stat(dir + '/' + file, function(err, stat){
      console.log(stat.isDirectory());
    });
  });
  // console.log(list);
});

// readdirp({ root: '/Users/jiangfeng/www/git/Tour/Front/Front.PC.Online/src/ResVacationOnline/js/vacation/app/', fileFilter: '*.js' })
//   .on('data', function (entry) {
//     files.push(entry);
//   });

router.get('/files', function(req, res, next) {
  res.send(files);
});

module.exports = router;
