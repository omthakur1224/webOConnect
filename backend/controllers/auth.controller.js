const User = require("../models/user.model")
var jwt = require('jsonwebtoken');

const login=async(req,res)=>{
    let user;
    try{

         user=await User.findOne({email:req.body.email})
        if(!user){
            res.send('user not found register first')
        }
    }
    catch(e){
        return res.json('error')
    }

    try{

        const match = await User.checkPassword(req.body.password)
    
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