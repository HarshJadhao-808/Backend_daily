
import mongoose, { mongo } from "mongoose";


const product = new mongoose.Schema({
    title:{type:String},
    price:{type:Number}
})


const products_model = mongoose.model("NewDb_Products",product)


export default  products_model