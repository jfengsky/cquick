var express = require('express');
var router = express.Router();

var folder = require('./folder');

var cmd = require('./cmd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/files', function(req, res, next) {
  folder.init(req.body, res);
});

router.post('/cmd', function(req, res, next) {
  cmd.init(req.body, res);
});

module.exports = router;
