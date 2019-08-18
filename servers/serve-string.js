var http = require('http')
var host = '127.0.0.1'
var port = 3000

var server = http.createServer( (request,response) =>
{
    response.writeHead(200, {"Content-Type" : "text/plain"});
    console.log("server working");
    response.write("Hello !!")
    response.end('Server Working success');
});

server.listen(port,host,(error)=>
{
    if(error)
    {
        return console.log('Error occured : ',error);
    }
    console.log('Server is listening on '+host+' : '+port );
});