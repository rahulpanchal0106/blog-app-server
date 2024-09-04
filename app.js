const express = require('express');
const signup = require('./Controllers/Auth/Signup.controler');
const app = express();

app.use(express.json())
app.post('/signup',signup);


app.get("/",(req,res)=>{
    res.send("🟢 Server is Live!")
})

module.exports = app;