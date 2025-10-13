import mongoose from "mongoose";


const userschema =new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , unique:true},
    password:String,
    role:{type:String , enum:["admin","user"] , default:"user"}
})

const usermodel = mongoose.model("User",userschema)


export default usermodel 