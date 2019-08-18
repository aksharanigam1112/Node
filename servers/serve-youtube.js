var request = require('request');
var http = require('http');
//var fs = require('fs');

http.createServer(function(req,res)
{
    res.writeHead(200 , {"Content-Type": 'video/mp4'});

    var x = request('https://www.youtube.com/watch?v=zyprn-HBJB8')
    req.pipe(x)
    x.pipe(res)
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');