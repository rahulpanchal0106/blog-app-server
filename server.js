require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const start = async()=>{
    try{
        console.log("Connecting with database...")
        await mongoose.connect(process.env.DB_CLUSTER).catch((e)=>{
            console.error("🔴 Failed connecting to Cluster: ",e.message)
        })
       
        mongoose.connection.on('connected',()=>{
            console.log("Database Cluster Connected...")
        })
        
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server is listening...")
        })
        
    }catch(e){
        console.error("Error Connecting to Database ",e.message)
    }
    
}

start()