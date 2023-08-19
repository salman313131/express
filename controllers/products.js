const path = require('path')
const rootDir = require('../util/path')
exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}

exports.getAllProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}