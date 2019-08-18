var http = require('http');

module.exports = {
    handleRequest : function(req,res)
    {
        res.writeHead(200 , {'Content-Type':'text/html'});
        res.write("Hello world");
        res.end();
    }
}

// .listen(3000,function(){
//     console.log("http://localhost:3000");
// });
