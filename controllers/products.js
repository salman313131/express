const Product = require('../model/product')
const path = require('path')
const rootDir = require('../util/path')
exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postAddProducts = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getAllProducts = (req,res,next)=>{
    const product = Product.fetch()
    console.log(product)
    res.sendFile(path.join(rootDir,'views','shop.html'))
}