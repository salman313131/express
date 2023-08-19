const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const contactRouter = require('./routes/contact')
const successRouter = require('./routes/success')
const errorController = require('./controllers/error')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter)
app.use(shopRouter)
app.use(contactRouter)
app.use(successRouter)

app.use(errorController.error)

app.listen(8000)