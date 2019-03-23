var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MDixNghyu1Y2YtKu',
  port: '3306',
  database: 'test'
});

module.exports = connection