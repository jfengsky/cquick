require("babel-register")({presets: ['es2015', 'react', 'stage-0']})
require('node-jsx').install({
    extension:'.jsx'
})
const React = require('react')

const renderToString = require('react-dom/server')

const Todolist = require('../public/src/Todolist')


var express = require('express');
var router = express.Router();

const data = ['list1', 'list2', 'list3']

// let TodolistCom = React.createFactory(Todolist)

let html = renderToString.renderToString(<Todolist data={data} />)

// let html = renderToString.renderToString(React.createElement(Todolist))

// let  html = renderToString.renderToString( TodolistCom(data) )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getData', function(req, res, next) {
    res.send(data);
});

module.exports = router;
