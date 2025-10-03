import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
})


const products = mongoose.model("Products",productschema)

export default products