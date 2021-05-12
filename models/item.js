const mongoose=require('mongoose');
const { productSchema }=require('./product');

const itemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    product:{
        type:productSchema,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
});
const Item=mongoose.model('items',itemSchema);
module.exports.Item=Item;
