const express = require('express')

const files = require('../modules/file')

const router = express.Router()

// 

/* GET home page. */
router.get('/nproxyconfig', function (req, res, next) {
  let readFile = files.readConfig('./nproxy/config.js')
  readFile.then( data => {
    res.send(data)
  })
});

module.exports = router;