const express = require('express')
// const http = require('http')

const app = express()

const memberRouter = require('./member')

app.use('/member', memberRouter)

/*
app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        name: 'jack',
        age
    })
})

app.post('/name', (req, res) => {
    res.send('tom post')
})

app.get('/user/byname', (req, res) => {
    let { name } = req.query
    res.json({
        name
    })
})

app.get('/user/byid', (req, res) => {
    let { id } = req.query
    res.json({
        id
    })
})

app.all('/all', (req, res) => {
    res.json({
      method: req.method  
    })
})
*/

app.use('/use', (req, res) => {
    res.json({
      method: req.method,
      path: req.path
    })
})





app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})