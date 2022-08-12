const express=require("express");
const connect = require("./configs/db");
const cors=require('cors');
const { signup, signin } = require("./controllers/auth.controller");
const app=express();
app.use(cors())
app.use(express.json());

app.use('/',require('./controllers/user.controller.js'));
app.post('/signup',signup);
app.post('/signin',signin)

app.listen(4444,async(req,res)=>{
    try{
        await connect();
        console.log("server is runnig on port 4444")
    }
    catch{
        console.log('error in db connection')
    }
})