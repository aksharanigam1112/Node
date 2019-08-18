var http = require('http');
var {handleRequest} = require('./serve.js');

http.createServer(handleRequest).listen(3000);