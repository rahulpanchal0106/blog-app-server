const express = require('express');
const signup = require('./Controllers/Auth/Signup.controler');
const login = require('./Controllers/Auth/Login.controller');
const app = express();

app.use(express.json())
app.post('/signup',signup)
app.post('/login',login)


app.get("/",(req,res)=>{
    res.send("🟢 Server is Live!")
})

module.exports = app;