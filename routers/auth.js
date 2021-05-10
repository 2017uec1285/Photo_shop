const express=require('express');
const bcrypt=require('bcrypt');
const _=require('lodash');
const { User }=require('../models/user');
const router=express.Router();

router.post('/',async (req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user)return res.status(400).send("Invalid Email & Password.");
    const match=await bcrypt.compare(req.body.password,user.password);
    if(!match)return res.status(400).send("Invalid Email & Password.");
    const token=user.generateAuthToken();
    return res.header('x-auth-token',token)
    .header('access-control-expose-headers','x-auth-token')
    .send(_.pick(user,['_id','name','isAdmin']));
});
module.exports=router;
