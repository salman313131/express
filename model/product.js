const fs = require('fs')
const rootDir = require('../util/path')
const path = require('path')
module.exports = class Product {
    constructor(t){
        this.title = t
    }
    save(){
        fs.writeFile(path.join(rootDir,'product.txt'),`product : ${this.title}`,{flag:'a'},(err)=>{
            console.log(err)
        })
    }
    static fetch(){
        const data = fs.readFileSync(path.join(rootDir,'product.txt'),'utf8',(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            else{
                return data
            }
        })
        return data
    }
}