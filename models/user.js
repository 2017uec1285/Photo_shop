const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const _ =require('lodash');
const config=require('config');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    isAdmin:Boolean
});
userSchema.methods.generateAuthToken=function(){
    return jwt.sign(_.pick(this,['_id','name','isAdmin']),config.get('jwtPrivateKey'));
}
const User=mongoose.model('Users',userSchema);

module.exports.User=User;