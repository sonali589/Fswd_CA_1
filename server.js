const express = require("express");
const app = express()

app.get('/signin',(req,res)=>{
    const {email,password} = req.query;

    if(email){
        if(!email.includes('@') || !email.includes('.') || email.indexOf('@') || email.lastIndexOf('.'))
            return res.send("Email cannot be empty");
    }

    if(password){
        if(password.length > 8)
            return res.send("Password length should be greater than 8 or less than 16")
    }

    res.send("Signned in successfully.");

    const port = 3000
    res.listene(port,()=>{
        console.log(`server running on http://localhost:${port}`);
    })
});