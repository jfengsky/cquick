var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let taskList = [{
  task: 'task1',
  done: false,
  id: 1
},{
  task: 'task2',
  done: false,
  id: 2
}]

router.post('/getAllTask', function(req, res, next) {
  res.send(taskList);
});

module.exports = router;
