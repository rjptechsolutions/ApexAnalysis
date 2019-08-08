const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load config
dotenv.config({path:'./config.env'});

const app = express();
//dev log
if (process.env.NODE_ENV === 'develpment' ){
    app.use(morgan('dev'));
}
//profile routers
app.use('/api/v1/profile',require('./routes/profile'));

//Handel Production
if(process.env.NODE_ENV === 'production'){
    //app static folder
    app.use(express.static(__dirname + '/public/'));

    //handel SPA
    app.get(/.*/,(req,res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;


app.listen(5000, ()=>{
    
});