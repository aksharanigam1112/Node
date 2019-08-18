var express = require('express');
var app = express();
var hbs = require('hbs');

app.use(express.static(__dirname+'/public'));

app.set('views',__dirname+'/views');
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res)=>
{
    res.render('index',
    {
        name:'Akshara',
        people: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"}
          ],
        isActive:false
    });
});

app.listen(3000);
