var http = require('http')
var {app} = require('./app.js')
var server = http.createServer(app)

const port = process.env.PORT || 4004
server.listen(port,()=>
{
    console.log('Server running at https://127.0.0.1:'+port)
});

