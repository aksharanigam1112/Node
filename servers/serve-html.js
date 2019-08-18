var http = require('http')
var fs = require('fs')


http.createServer(function(req,res)
{
    console.log("Port number : 3000");

    res.writeHead(200, {"Content-Type" : "text/HTML"});

    //reading the content file
    fs.readFile('index.html',(err,data)=>
    {
        if(err)
            throw err;
        console.log("Operation successfull");
        res.end(data)
    });
}).listen(3000);