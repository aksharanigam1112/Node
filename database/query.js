const mysql = require('mysql')
var con = mysql.createConnection({
        host:'localhost' , 
        user:'aksharanigam',
        password:'test',
        database : 'nodedb'
    });


con.connect(function(err){
    if(err)
        throw(err);
    else
        console.log("Connected");
        // var sql = 'Create database nodedb';
        // var sql = 'Use nodedb';
        var sql = 'Create table user(username varchar(20) primary key, password varchar(20) not null)';
        var sql1 = "Describe user";
        con.query(sql, function(error , result){
            if(error) throw(error);
            console.log("Result: "+JSON.stringify(result));
        });

        con.query(sql1,function(err,result){
            if(err) throw err;
            console.log("Result : "+JSON.stringify(result));
        });
});

