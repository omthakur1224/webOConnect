var jwt = require('jsonwebtoken');
const User=require('../models/user.model')
require('dotenv').config();

//we need token first
const varifyToken=(token)=>{
   return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY, (err,payload)=>{
                if(err)return reject(err)
                return resolve(payload)
        })
    })
}

//checking for the bearer token
const protect=async (req,res,next)=>{

    const bearer=req.headers.authorization;

    if(!bearer || !bearer.startsWith('Bearer')){
        return res.status(401).json("authentication fialed")
    }
    const token=bearer.split("Bearer")[1].trim();
    console.log("token",token)
    // console.log("payload",payload)

    let payload;
//varifying token coming from frontend with backend
    try{
        payload=await varifyToken(token);
        console.log("payload",payload)
    }catch(err){
        return res.json(err)
    }
    let user;
    try{
        user=User.findById(payload.id)
    }
    catch(err){
        return res.json({err:"error"})
    }

    if(!user){
        return res.json({"failed":"error"})
    }
    req.user=user;
    next();
}

module.exports=protect;