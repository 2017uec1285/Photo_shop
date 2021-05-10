
const express=require('express');
const config=require('config');
const app= express();

require('./startup/db')();
require('./startup/routes')(app);

const PORT=config.get('PORT');
app.listen(PORT,()=>console.log(`Listening at port ${PORT}...`))
