var express = require('express');
var app = express();
 

app.use(express.static(__dirname + '/public'));

//   

app.get('/home' , (req,res)=>
{
    res.render('/home.html');
});

app.get('/' , (req,res)=>
{
    res.render('/index.html');
});

// res.send() = string bhejta hai
// res.render() = same link pe view change kar deta hai
// res.redirect() = link will also get changed

 
app.listen(3000,  function(err)
 {
     if(err)
     {
         console.error(err);
     }
     else
     {
        console.log('Hello !!');
     }
     
 });

