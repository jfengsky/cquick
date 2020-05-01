const express = require('express')
const router = express.Router()

router.get('/list', (req,res) =>{
    res.json({
        list: 001
    })
})

module.exports = router