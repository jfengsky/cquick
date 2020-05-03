/**
 * 启动本体服务器等待插件发来的信息
 */
const express = require('express')
const bodyParser = require('body-parser')
const save = require('./save')
const app = express()
app.use(bodyParser.json())

app.all('/weiboimages', (req, res) => {
    save(req.body)
    // res.json({
    //     message: req.body
    // })
})

app.listen(3000, () => { })