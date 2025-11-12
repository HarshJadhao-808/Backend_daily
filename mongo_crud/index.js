import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4000 ;


// connect to DB

const ConnectDB = async()=>{
try {
    await mongoose.connect(process.env.Mongo_url)
    console.log("DB connected")
} catch (error) {
   console.log(error) 
}
}

// Create a model

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
    },
    quantity:{
        type:Number,
        default:0
    },

},{timestamps:true})


const Item = mongoose.model("Item",itemSchema)
// console.log(Item)

ConnectDB()


app.get("/",(req,res)=>{
   res.send("Welcome to our server")
})


app.post("/",async(req,res)=>{
  const item = new Item(req.body);
  await item.save()
  res.send({Massage:"Item created",item})
  
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})