var mongoose = require('mongoose')
var schema = mongoose.Schema;

var userschema = new schema({
    name : {type:String , unique : true , required : true},
    pass : {type:String , required : true},
    phn : {type:String , required : true},
    age : {type : Number,required:true}
})

module.exports = mongoose.model('User',userschema)
