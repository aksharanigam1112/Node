var express = require('express');
var bodyparser = require('body-parser');
const mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost' , 
    user:'aksharanigam',
    password:'test',
    database : 'nodedb'
});

var app = express();

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(express.static(__dirname));
app.set('views',__dirname+"/views");
app.set('view engine' , 'hbs');

app.get('/',(req,res)=>
{
    res.render('index');
});

app.post('/',(req,res)=>
{
    var user = req.body.Username;
    var pass = req.body.Password;
    con.connect()
    {
        console.log("Connected");
        var sql = `Insert into user(username,password) values ("${user}","${pass}");`
        // var values = [[user , pass]];
        // con.query(sql,[values],function(..)...)

        con.query(sql , function(err,result)
        {
            if(err) throw(err);
            console.log("Result: "+JSON.stringify(result));
        });
    }

    
});

app.listen(3000,(err)=>
{
    if(err) throw(err);
    console.log("http://localhost:3000");
});

