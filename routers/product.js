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
    return res.send(product);
});

router.get('/',async(req,res)=>{
    let product=await Product.find();
    product=product.map(item=>(
        // 
        {
            name:item.name,
            price:item.price,
            productImage:'http://localhost:3900/'+item.productImage,
            _id:item._id,
            request:{
                type:"GET",
                url:'http://localhost:3900/product/'+item._id
            }
        }
    ));
    return res.send(product);
});

router.post('/',upload,async (req,res)=>{

    const product=new Product({
        name:req.body.name,
        price:req.body.price,
        productImage:req.file.path
    });
    await product.save();
    if(!product)return res.status(404).send('Error occured.');
    return res.send(product);
});
// router.get('/:id',async(req,res)=>{
//     // console.log(req.param);
//     const product=await Product.findById(`${req.params.id}`);
//     return res.send(product);
// });
module.exports=router;