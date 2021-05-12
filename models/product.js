const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    }
});
const Product=mongoose.model('products',productSchema);
module.exports={
    Product:Product,
    productSchema:productSchema
};
