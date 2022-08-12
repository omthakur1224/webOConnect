
const mongoose = require("mongoose");
const bcrypt=require('bcrypt')
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
            default:false
        },
        "date":{
            type:String,
            default:new Date(Date.now())
        }
})

userSchema.pre('save',function(next){

        if(!this.isModified("password")) return next();

        bcrypt.hash(this.password,8,(err,hash)=>{
            if(err)return next(err);
            this.password=hash;
            next();
        })
});

userSchema.methods.checkPassword=(password)=>{
        const hashedPassword=this.password;
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,hashedPassword,(err,same)=>{
                if(err)return reject(err)

                resolve(same)

            })
    })
}
 const User=mongoose.model("User",userSchema);

 module.exports=User