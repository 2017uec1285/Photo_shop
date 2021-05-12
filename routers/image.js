const express=require('express');
const fs=require('fs');
const path=require('path');
const { Image } =require('../models/image');
const router=express.Router();
var multer = require('multer');
 
const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+'-'+file.originalname);
    }
}); 
const upload = multer({ storage: storage }).single(`Charan`);


router.get('/',async (req,res)=>{
    const image=await Image.find();
    return res.send(image);
});

router.post('/',upload, (req,res)=>{
    // const imageFile=;
    console.log(req.file);
    // const imageFile=fs.readFileSync(__dirname+`\\..\\upload\\${req.body.filename}`);
    // const encoded_image=imageFile.toString('base64');

    // const image=new Image({
    //     // name:req.body.name,
    //     // desc:req.body.desc,
    //     img:{
    //         data:encoded_image,
    //         contentType:'image/png'
    //     }
    //     // img:imageFile
    // });
    // await image.save();
    return res.send("image uploaded");
});

module.exports=router;