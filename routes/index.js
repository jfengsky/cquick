var express = require('express');
var router = express.Router();

var folder = require('./folder');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/files', function(req, res, next) {
  folder.init(req.body, res);
});

module.exports = router;
