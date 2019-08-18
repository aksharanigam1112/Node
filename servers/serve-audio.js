var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
    console.log("Port Number : 3000");

    res.writeHead(200 , {"Content-Type": 'audio/mp3'});
    
    fs.exists('/media/aksharanigam/New Volume/Akshara/Music/English/01 Despacito Remix feat Justin Bieber 1 1.mp3' , function(exists)
    {
        if(exists)
        {
            var rstream = fs.createReadStream('/media/aksharanigam/New Volume/Akshara/Music/English/01 Despacito Remix feat Justin Bieber 1 1.mp3');
            rstream.pipe(res);
        }
        else
        {
            res.end("Its a 404");
        }
    
    });
}).listen(3000);