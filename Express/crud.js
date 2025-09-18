import express from 'express'
import dotenv from 'dotenv'
import fs from 'fs'
import nodemon from 'nodemon'
import { json } from 'stream/consumers'
dotenv.config()
const app = express()

app.use(express.json())


const readdb=()=>{
   const data =  fs.readFileSync("db.json","utf-8")
   return JSON.parse(data)
}

const writedb = (data) => {
    fs.writeFileSync("db.json",JSON.stringify(data))
}

app.get("/books",(req,res)=>{
    const db = readdb()
    res.send(db.books)
})


app.post("/books",(req,res)=>{
     const db = readdb()
    const {author,book}=req.body
  let  new_book = {id:Date.now() ,author,book}
    
    db.books.push(new_book)
    writedb(db)
    res.json(new_book)
     
})

let port = process.env.CRUDPORT
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})