const path = require('path')
const rootDir = require('../util/path')
exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.printSuccess = (req,res,next)=>{
    res.send('<h1>Form Successfully filled</h1>')
}