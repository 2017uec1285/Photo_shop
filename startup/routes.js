const express=require('express');
const cors=require('cors');
const user=require('../routers/user');
const auth=require('../routers/auth');

module.exports=function(app){
    app.use(cors());
    app.use(express.json());
    app.use('/user',user);
    app.use('/auth',auth);
};
