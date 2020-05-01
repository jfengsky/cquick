const express = require('express')
// const http = require('http')

const app = express()

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

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})