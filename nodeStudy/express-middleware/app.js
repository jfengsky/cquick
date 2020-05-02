const express = require('express')

const userRouter = require('./router/user')

const app = express()

app.use(express.static('static', {
    extensions: ['html', 'htm']
}))

app.use('/user', userRouter)

function valid_name_middleware(req, res,next){
    let { name } = req.query

    if(!name || !name.length) {
        res.json({
            message: 'error'
        })
    } else {
        next()
    }
}

app.all('*', valid_name_middleware)

app.get('/test', (req, res) => {

    res.json({
        message: 'test'
    })
})

app.listen(3000, () => { })