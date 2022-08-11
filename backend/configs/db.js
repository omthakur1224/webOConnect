const mongoose=require('mongoose');
const dotenv = require("dotenv").config();
const connect=()=>{
        mongoose.connect(process.env.MONGOURI,{useNewUrlParser:true,useUnifiedTopology: true})
        .then((res)=>{
            console.log("congrats! DB connection successful")
        })
        .catch((res)=>console.log("DB connection failed"))
}
module.exports=connect;