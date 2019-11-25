var http = require('http')
var {app} = require("./app.js")
var server = http.createServer(app)
var port = process.env.PORT || 3000

server.listen(port,()=>
{
    console.log('Server running at http://localhost:'+port)
})
