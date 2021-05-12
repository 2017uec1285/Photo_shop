const express=require('express');
const { Customer }=require('../models/customer');

const router=express.Router();

router.get('/:id',async (req,res)=>{
    const customer=await Customer.findById(req.params.id);
    if(!customer)res.status(404).send("Error occured.");
    return res.send(customer);
});

router.get('/',async (req,res)=>{
    const customer=await Customer.find();
    if(!customer)res.status(404).send("Error occured.");
    return res.send(customer);
});
router.delete('/:id',async (req,res)=>{
    const customer=await Customer.findByIdAndRemove(req.params.id);
    if(!customer)res.status(404).send("Error occured.");
    return res.send(customer);
});


router.post('/',async (req,res)=>{
    let customer=new Customer({
        name:req.body.name,
        phone:req.body.phone,
        balance:req.body.balance,
        gold:req.body.gold
    });
    customer=await customer.save();
    if(!customer)res.status(404).send("Error occured.");
    return res.send(customer);
});

router.put('/:id',async(req,res)=>{
    const customer=await Customer.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        phone:req.body.phone,
        balance:req.body.balance,
        gold:req.body.gold
    },{new:true});
    if(!customer)res.status(404).send("Error occured.");
    return res.send(customer);
})

module.exports=router;