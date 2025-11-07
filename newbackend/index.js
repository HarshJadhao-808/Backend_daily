import express from 'express'
import connectdb from './config/db.js'
import mongoose from 'mongoose'
import products_model from './models/productschema.js'
import { act } from 'react'
const app = express()

app.use(express.json())

connectdb()

app.get("/",(req,res)=>{
    res.send("hello db")
})

app.post("/",async(req,res)=>{
    const {title,price} = req.body 
    const product = await products_model.create({
        title,
        price
    })

    
    res.json({message:"Created successfully" , product})
    

})

const PORT = 3000


app.listen(PORT , ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
    
})