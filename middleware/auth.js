const config=require('config');
const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    if(!config.get('authRequired'))return next();

    const token=req.header('x-auth-token');
    if(!token)return res.status(401).send('Access denied, no token Provided.');
    try{
        req.user=jwt.verify(token,config.get('jwtPrivateKey'));
        return next();
    }
    catch(err){
        return res.status(400).send('Invalid token.');
    }

};