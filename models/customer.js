const mongoose = require('mongoose');

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true,
        default:0,
        min:0
    },
    gold:{
        type:Boolean,
        required:true,
        default:false
    }
});
const Customer=mongoose.model('Customers',customerSchema);
module.exports={
    Customer:Customer,
    customerSchema:customerSchema
};