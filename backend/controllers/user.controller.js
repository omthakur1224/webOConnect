
const express=require('express');
const User = require('../models/user.model');
const router=express.Router();
// const app=express()

router.get('/userz',async(req,res)=>{
    console.log("trying to get data")
    try{

        const user=await User.find({});
        if(user){
            res.send(user);
        }
    }
    catch(err){
        console.log("error in getting")
    }
})


router.post('/userz',async(req,res)=>{
    console.log("trying to posting data")
    
    try{

        const user=await User.create(req.body);
        if(user){
            res.send(user);
        }
    }
    catch(err){
        console.log("error in getting")
    }
})



module.exports=router