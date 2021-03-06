const config=require('config');

module.exports=function(req,res,next){
    if(!config.get('authRequired'))return next();
    if(!req.user.isAdmin)return res.status(403).send('Access denied, User is not Admin.');
    return next();

};