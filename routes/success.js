const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.post('/success',(req,res,next)=>{
    res.send('<h1>Form Successfully filled</h1>')
})

module.exports = router