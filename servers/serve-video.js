var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
    console.log("Port Number : 3000");

    res.writeHead(200 , {"Content-Type": 'video/mp4'});
    
    fs.exists('/media/aksharanigam/New Volume/Akshara/Movies/Stree 2018 Hindi 720p HD.mp4' , function(exists)
    {
        if(exists)
        {
            var rstream = fs.createReadStream('/media/aksharanigam/New Volume/Akshara/Movies/Stree 2018 Hindi 720p HD.mp4');
            rstream.pipe(res);
        }
        else
        {
            res.end("Its a 404");
        }
    
    });
}).listen(3000);