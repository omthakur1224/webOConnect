const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
        "name":{
            type:String,
            required:true
        },
        "email":{
            type:String,
            required:true
        },
        "phone":{
            type:Number,
            required:true
        },
        "password":{
            type:String,
            required:true
        },
        "gender":{
            type:String,
            required:true
        },
        "status":{
            type:Boolean,
            
        },
        "date":{
            type:String,
            default:new Date(Date.now())
        }
})

 const User=mongoose.model("User",userSchema)
 module.exports=User