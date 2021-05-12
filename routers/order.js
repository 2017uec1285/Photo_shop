const express=require('express');
const mongoose=require('mongoose');
const Fawn=require('fawn');
const { Customer }=require('../models/customer');
const { Item }=require('../models/item');
const { Order }=require('../models/order');
const router=express.Router();
Fawn.init(mongoose);

router.post('/',async(req,res)=>{
    const customer=await Customer.findById(req.body.customerId);
    if(!customer)return res.status(400).send('Invalid customerId.');
    const item=await Item.findById(req.body.itemId);
    if(!item)return res.status(400).send('Invalid itemId.');
    if(item.count==0)return res.send(400).send('No Item in the stock.');
    let order=new Order({
        customer:{
            _id:customer._id,
            name:customer.name,
            phone:customer.phone
        },
        item:{
            _id:item._id,
            title:item.title,
            price:item.price
        },
        status:req.body.status
    });
    try{
        new Fawn.Task()
        .save('orders',order)
        .update('items',{_id:item._id},{$inc:{count:-1}}).run();
        return res.send(order);
    }
    catch(ex){
        return res.status(500).send('Internal server Error.');
    }
});

module.exports=router;