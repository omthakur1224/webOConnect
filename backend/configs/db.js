const mongoose=require('mongoose');
const dotenv = require("dotenv").config();
const connect=()=>{
        mongoose.connect("mongodb://0.0.0.0:27017/userz",{useNewUrlParser:true,useUnifiedTopology: true})
        .then((res)=>{
            console.log("congrats! DB connection successful")
        })
        .catch((res)=>console.log("DB connection failed",res))
}
module.exports=connect;
