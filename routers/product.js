const express=require('express');
const multer=require('multer');
const { Product }=require('../models/product');
const router=express.Router();

const storage=multer.diskStorage({
    destination:'./public/uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+'-'+file.originalname);
    }
});
const upload=multer({storage:storage}).single('file');

router.get('/:id',async(req,res)=>{
    const product=await Product.findById(req.params.id);
    return res.send({
        name:product.name,
        productImage:'http://localhost:3900/'+product.productImage,
        _id:product._id,
        request:{
            type:"GET",
            url:'http://localhost:3900/product/'+product._id
        }
    });
});

router.get('/',async(req,res)=>{
    let products=await Product.find();
    products=products.map(p=>(
        {
            name:p.name,
            productImage:'http://localhost:3900/'+p.productImage,
            _id:p._id,
            request:{
                type:"GET",
                url:'http://localhost:3900/product/'+p._id
            }
        }
    ));
    return res.send(products);
});

router.post('/',upload,async (req,res)=>{

    const product=new Product({
        name:req.body.name,
        productImage:req.file.path
    });
    await product.save();
    if(!product)return res.status(404).send('Error occured.');
    return res.send(product);
});
module.exports=router;