import express from 'express'
import dotenv from 'dotenv'
import fs from "fs"
import cors from "cors"


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const data = fs.readFileSync("db.json", "utf-8")



app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Goa Singham</h1>")
})

app.get("/data",(req,res)=>{
    res.send(data)
})


app.post("/",(req,res)=>{
    const x = req.body
   


    res.send(x)

   
})


let port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})