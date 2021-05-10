const express=require('express');
const cors=require('cors');
const user=require('../routers/user');

module.exports=function(app){
    app.use(cors());
    app.use(express.json());
    app.use('/user',user);
};
