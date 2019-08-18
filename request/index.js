var express = require('express');
var app = express();

app.get('/',(req,res)=>
{
    console.log(req.query.name);
});

app.listen(3000, ()=>{
    console.log("http://localhost:3000/")
});
