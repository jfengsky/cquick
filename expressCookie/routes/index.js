var express = require('express');
var router = express.Router();

const reactDom = require('react-dom/server')

require('node-jsx').install({
  extension: '.js'
})

// var Hello = require('./test')
// var helloStr = Hello.toString()

var HelloT = require('./Hello')
var helloStr = HelloT.toString()

var html = reactDom.renderToString(HelloT({data: 111}))

// var html2 = ReactDOM.renderToStaticMarkup(HelloT({data: 111}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.secret='临时随意签名'
  res.cookie('name', 'test3')
  // res.render('index', { title: 'Express' });

  console.log('没有签名的cookie:' + req.cookies)

  // console.log('有签名的cookie:' + req.signedCookies)

  res.send(html)
});

module.exports = router;
