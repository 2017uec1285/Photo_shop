const mongoose=require('mongoose');
const { customerSchema } = require('./customer');
const { itemSchema } = require('./item');

const orderSchema=new mongoose.Schema({
    customer:{
        type:customerSchema,
        required:true
    },
    item:{
        type:itemSchema,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
});
const Order=mongoose.model('orders',orderSchema);
module.exports={
    Order:Order,
    orderSchema:orderSchema
};