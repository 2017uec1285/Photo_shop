const express=require('express');
const bcrypt=require('bcrypt');
const _ =require('lodash');
const auth=require('../middleware/auth');
const { User }=require('../models/user');
const router=express.Router();

router.get('/',async (req,res)=>{//REMOVE this routes 
    const result= await User.find();
    return res.send(result);
});
router.get('/me',auth,async (req,res)=>{
    const user= await User.findById(req.user._id);
    return res.send(_.pick(user,['_id','name','email','isAdmin']));
});
router.post('/',async (req,res)=>{

    //handle duplicate email
    let user=await User.findOne({email:req.body.email});
    if(user)return res.status(400).send('This Email is already register.');
    //add data, encode password
    user=new User(_.pick(req.body,['name','email','password']));
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);
    user=await user.save();
    if(!user)return res.status(404).send('Error occured.');
    const token=user.generateAuthToken();
    return res.header('x-auth-token',token)
    .header('access-control-expose-headers','x-auth-token')
    .send(_.pick(user,['_id','name','isAdmin']));
});
module.exports=router;
