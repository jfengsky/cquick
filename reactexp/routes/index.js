const renderToString = require('react-dom/server')

// const Todolist = require('./public/src/Todolist')

var express = require('express');
var router = express.Router();

const data = ['list1', 'list2', 'list3']



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getData', function(req, res, next) {
    res.send(data);
});

module.exports = router;
