import mongoose from "mongoose";

const bookschema =  new mongoose.Schema({
    title:{type:String,unique : true},
    author:{type:String,required:true},
    year:{type:Number,}
})

const BooksModel = mongoose.model("Books",bookschema)

export default BooksModel