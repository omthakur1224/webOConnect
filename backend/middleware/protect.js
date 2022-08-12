var jwt = require('jsonwebtoken');
const User=require('../models/user.model')


const varifyToken=(token)=>{

    new Promise((resolve,reject)=>{
        jwt.verify(token,'secret key', (err,payload)=>{
                if(err)return reject(err)
                return resolve(payload)
        })
    })
}



const protect=async (req,res,next)=>{

    const bearer=req.headers.authorization;

    if(!bearer || !bearer.startWith('bearer')){
        return res.status(401).json("authentication fialed")
    }
    const token=bearer.split("bearer")[1].trim();
    console.log("token",token)
    
    let payload;

    try{
        payload=await varifyToken(token);
    }catch(err){
        return res.json(err)
    }
}

module.expolts=protect;