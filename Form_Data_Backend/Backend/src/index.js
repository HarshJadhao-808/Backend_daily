import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
connectDb(process.env.Mongo_Url);

app.get("/",(req,res)=>{
    res.json({
        a:1,
        b:2,
        c:3
    })
})



const Port=process.env.PORT
app.listen(Port,()=>{
    console.log(`server is running on http://localhost:${Port}`)
})