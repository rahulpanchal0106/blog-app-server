require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const start = async()=>{
    try{
        console.log("Connecting with database...")
        await mongoose.connect(process.env.DB_CLUSTER).catch(
            (e)=>{
                console.error("🔴 Failed connecting to Cluster: ",e.message)
            }
        )
        
        app.listen(process.env.PORT || 3000,
            ()=>{
                console.log("Server is listening...")
            }
        )
        
        mongoose.connection.on('connected',
            ()=>{
                console.log("Database Cluster Connected...")
            }
        )
    }catch(e){
        console.error("Error Connecting to Database ",e.message)
    }
    
}
try{
    start()
}catch(e){
    console.error("Error starting server: ",e.message)
}