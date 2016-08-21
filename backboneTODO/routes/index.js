var express = require('express');
var router = express.Router();

const taskControl = require('./taskControl')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getAllTask', function(req, res, next) {
  setTimeout(() => {
    res.send(taskControl.list);
  }, 2000)
  // res.send(taskControl.list);
});

router.post('/updata', function(req, res, next) {
  let {
    type,
    desc,
    id
  } = req.body
  id = parseInt(id)
  if(type === 'add' ){
    // 添加数据

    let tempId = taskControl.add(desc)
    // 如果成功，则返回成功状态并返回新数据的id
    res.send({
      success: true,
      id: tempId
    })
  } else if( type === 'done' ) {
    // 标记完成
  } else if( type === 'clear' ){
    // 清除完成的数据
  } else if( type === 'remove'){
    let removeState = taskControl.remove(id)
    res.send({
      success: removeState
    })
  }
});
module.exports = router;
