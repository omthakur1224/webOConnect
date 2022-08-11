
const express=require('express');
const User = require('../models/user.model');
const router=express.Router();
// const app=express()

router.get('/',async(req,res)=>{
    console.log("trying to get data")
    try{

        const user=await User.find({});
        if(user){
            res.send(user);
        }
    }
    catch{
        console.log("error in getting")
    }
})


module.exports=router