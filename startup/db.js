const mongoose=require('mongoose');
const config=require('config');
module.exports =function(){
    mongoose.connect(config.get('db') ,{ 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(()=>console.log('Data-Base Connected.'))
    .catch(()=>console.error('Error occured. Try again.'));
};
