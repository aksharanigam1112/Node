var express = require('express')
var app = express()
var {adminRoute} = require('./routes/admin.js')
var {userRoute} = require('./routes/user.js')

app.use('/admin',adminRoute)
app.use('/user',userRoute)

module.exports = {app}