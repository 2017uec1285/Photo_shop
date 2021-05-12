const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    // name:{
    //     type:String
    // },
    // desc:{
    //     type:String
    // },
    img:{
        data:Buffer,
        contentType:String
    }
});
const Image=mongoose.model('images',imageSchema);
module.exports.Image=Image;