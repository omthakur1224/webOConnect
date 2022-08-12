const User = require("../models/user.model")
var jwt = require('jsonwebtoken');

require('dotenv').config();

const newToken=(user)=>{

    return jwt.sign({id:user.id},process.env.JWT_SECRETE_KEY) 
}

const signup=async(req,res)=>{
    try{
        const user=await User.create(req.body)
        const token=newToken(user)
        return res.json({"token":token})
    }
    catch(err){
        console.log(err)
        res.json({
            'status':"failed",
            "error":err
        })
    }
}

const signin=async(req,res)=>{

    let user;
//checking user validity
    try{
        user=await User.findOne({email:req.body.email})
        if(!user){
            res.send('user not found register first')
            res.send(user)
        }
    }
    catch(e){
        return res.json('error')
    }
//checking password
    try{
        console.log("usr",user)
        const match = await user.checkPassword(req.body.password)
    
        if(!match){
            res.send("password not matched")
        }
    }catch(err){
        console.log(err)
        return res.json(err)
    }

    const token=newToken(user);
    
    return res.json({data:{token}})
}

module.exports={
    signin,
    signup
}