const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const user=require('../routers/user');
const auth=require('../routers/auth');
const image=require('../routers/image');
const product=require('../routers/product');
const item=require('../routers/item');

module.exports=function(app){
    app.use(cors());
    // app.use(express.json());
    app.use(bodyParser.json({limit:'50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use('/public/uploads',express.static('public/uploads'));
    app.use('/product',product);
    app.use('/item',item);
    app.use('/user',user);
    app.use('/auth',auth);
    app.use('/image',image);
    
};
