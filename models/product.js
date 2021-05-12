const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    productImage:{
        type:String,
        required:true
    }
});
const Product=mongoose.model('products',productSchema);
module.exports.Product=Product;
