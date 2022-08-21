
const express=require('express');
const User = require('../models/user.model');
const router=express.Router();
// const app=express()
const protect=require('../middleware/protect.js')

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

router.patch('/userz/:id',async(req,res)=>{
    console.log("trying to posting data")
    
    try{

        const user=await User.findOneAndUpdate({_id:req.params.id},req.body);
        if(user){
            res.send("data updated successfully");
        }
    }
    catch(err){
        console.log("error in getting")
        res.send({"status":"failed",err})
    }
})



module.exports=router