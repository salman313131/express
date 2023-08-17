const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('in the 1st middleware')
    next()
})
app.use((req,res,next)=>{
    console.log('in the 2nd middleware')
    res.send('<h1>Hello, how are you</h1>')
})

app.listen(8000)