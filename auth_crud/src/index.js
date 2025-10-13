import express, { json } from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import userrouter from './routes/userroutes.js'


dotenv.config()
const app = express()
app.use(express.json())

connectdb()
app.use("/",userrouter)
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);

    
})


