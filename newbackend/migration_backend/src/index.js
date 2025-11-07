import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/connectdb.js'
import User from './Models/Usermodel.js'
import UserRouter from './Routes/userroutes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use("/user",UserRouter)

app.get("/",async(req,res)=>{
    try {
        const users = await User.find()
        res.json({message:"Users found",users})
    } catch (error) {
        console.log(error)
    }
})


connectdb(process.env.Monggo_url);



const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);  
})