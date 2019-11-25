var express = require('express')
var app = express()
var mongoose = require('mongoose')
var {userRoute} = require("./routes/user.js")
var bdp = require('body-parser')
var cors = require('cors')

app.use(bdp.urlencoded({extended:true}))
app.use(bdp.json())
// app.use(cors)

app.use('/user',userRoute)

mongoose.connect('mongodb://localhost:27017/akshara')
app.set('view engine','hbs')
app.set('views',__dirname+'/views')

module.exports = {app}