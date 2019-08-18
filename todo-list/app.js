var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var obj = [];
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(express.static(__dirname));

app.set('views',__dirname+'/views');
app.set('view engine','hbs');

app.get('/',(req,res)=>
{
    res.render('form',{
        item:obj
    });
});

app.post('/',(req,res)=>
{
    var str = req.body.item1;
    // var ctr = req.body.a;
    // var new_item = [];
    // new.item1 = req.body.
    // console.log(ctr);
    obj.push(req.body);
    console.log(obj);
    res.redirect('/');
});

app.listen(3000);
