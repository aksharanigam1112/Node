var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(express.static(__dirname));

app.listen(3000 , function(err)
{
    if(err)
        console.error(err);
    else
        console.log('Hello !!');
});

app.get('/' ,(req,res)=>
{
    res.render('/index.html');
});

app.post('/',(req,res)=>
{
    var name = req.body.Name;
    var contact = req.body.Contact;
    console.log(req.body);
    
    var data = name+"\t"+contact+"\n";
    var data1 = JSON.stringify(req.body);

    console.log(data1);
     
    fs.appendFile('file.txt' , data , function(err)
    {
        if(err)
            console.log(err);
        else
            console.log("Appended in text file");
    });

    fs.appendFile('file.json', data1 , function(err)
    {
        if(err)
            console.log(err);
        else
            console.log("Appended in json file");
    })
});
