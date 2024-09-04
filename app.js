const express = require('express');
const signup = require('./Controllers/Auth/Signup.controler');
const login = require('./Controllers/Auth/Login.controller');
const createBlog = require('./Controllers/Feed/create.controller')
const auth = require('./Middlewares/auth');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

app.post('/signup',signup)
app.post('/login',login)
app.post('/create',auth,createBlog)


app.get("/",(req,res)=>{
    res.send("🟢 Server is Live!")
})

module.exports = app;