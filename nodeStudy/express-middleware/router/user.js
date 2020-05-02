const express = require('express')

const router = express.Router()

router.use(function (req, res, next) {
    console.log('loggle from userRouter')
    next()
})

function validd_login_params(req, res, next) {
    let { name } = req.query
    if(!name){
        res.json({
            message: 'name error'
        })
    } else {
        req.formdata = {
            name
        }
        next()
    }
}

router.get('/login', [validd_login_params], (req, res) => {
    console.log(req)
    const { formdata } = req
    res.json({
        formdata,
        message: 'router user'
    })
})


module.exports = router