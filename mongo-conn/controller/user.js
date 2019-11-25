var User = require('../models/usermodel.js')


function user_details(req,res)
{
//    res.render('dashboard', {
//        users : User.find({name : {$ne : req.params.name}},{name:1 , age:1 , phn:1 ,_id:0})
//    })
    console.log(User.find({name : {$ne : req.params.name}},{name:1 , age:1 , phn:1 ,_id:0}))
    res.end()
}

function user_create(req,res)
{
    // res.sendfile('form.html')
    var user = new User({
        name : req.body.name,
        pass : req.body.pass,
        phn : req.body.phn,
        age : req.body.age
    })

    user.save((err)=>
    {
        if(err)
            throw err
        else
            console.log('User Created')
    })
    res.end()
}

function user_login(req,res)
{
    var name = req.body.name
    var pass = req.body.pass

    if(pass == User.find({$and : [{pass : pass} , {name : name}]} , {pass : 1 , _id :0}))
        console.log('Login Successful')
    res.end()    
    // res.redirect('/user/'+name)
}

function user_update(req,res)
{
    var name = req.params.name
    var phn = req.params.phn
    var age = req.params.age

    User.update({name : name} , {$set : [{age : age} , {phn:phn}]})
    console.log("User updated")
    res.end()
}

function user_delete(req,res)
{
    var name = req.params.name
    User.remove({name:name})
    console.log("User Deleted")
    res.end()
}

module.exports = {user_create , user_details , user_delete , user_update , user_login}
