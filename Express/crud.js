import express from 'express'
import dotenv from 'dotenv'
import fs, { read } from 'fs'
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
    let data = JSON.parse(readdb())
    res.send(data)
})
app.post("/books",(req,res)=>{
        let data = readdb()
        let  {title,author} = req.body
        let new_obj = {id:Math.floor(Math.random() * 1000) , title , author}
        data.books.push(new_obj)
        writedb(data)
        res.send(data)
})

app.put("/books/:id",(req,res)=>{
        let data = readdb()
        const { id }= req.params
        let {title,author}=req.body
        let index = data.books.findIndex((el)=> el.id == id)
        data.books[index]={...data.books[index], title , author}
        writedb(data)
        res.send(data)
})


app.delete("/books/:id",(req,res)=>{
    let data = readdb()
    const {id} = req.params;
    let index = data.books.findIndex((el)=> el.id == id)
    data.books.splice(index,1)
    writedb(data)
    res.send(data)
})


let port = process.env.CRUDPORT
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})