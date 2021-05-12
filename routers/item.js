const express=require('express');
const { Item }=require('../models/item');
const { Product }=require('../models/product');
const router=express.Router();

router.get('/:id',async(req,res)=>{
    const item=await Item.findById(req.params.id);
    if(!item)return res.status(404).send('Error occured.');
    return res.send({
        _id:item._id,
        title:item.title,
        product:{
            name:item.product.name,
            productImage:'http://localhost:3900/'+item.product.productImage,
            _id:item.product._id
        },
        price:item.price
    });
});

router.get('/',async(req,res)=>{
    let items=await Item.find();
    if(!items)return res.status(404).send('Error occured.');
    items=items.map(item=>(
        {
            _id:item._id,
            title:item.title,
            product:{
                name:item.product.name,
                productImage:'http://localhost:3900/'+item.product.productImage,
                _id:item.product._id
            },
            price:item.price
        }
    ));
    return res.send(items);
});

router.post('/',async (req,res)=>{

    const product=await Product.findById(req.body.productId);
    if(!product)return res.status(400).send('Invalid productId.');
    let item=new Item({
        title:req.body.title,
        product:product,
        price:req.body.price,

    });
    item=await item.save();
    if(!item)return res.status(404).send('Error occured.');
    return res.send(item);
});
module.exports=router;