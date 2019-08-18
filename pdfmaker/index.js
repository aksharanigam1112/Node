var express = require('express');
var app = express();
var bodyparser = require('body-parser');
// var hbs = require('hbs');

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(express.static(__dirname));
app.set('views',__dirname+'/views');
app.set('view engine','hbs');

app.get('/',(req,res)=>
{
    res.render('index');
});

app.post('/',(req,res)=>
{
    var fn = req.body.FirstName;
    var ln = req.body.LastName;
    console.log(fn+"\t"+ln);
});

app.listen(3000, ()=>{
    console.log("http://localhost:3000/")
});
