import mongoose, { mongo } from "mongoose";

mongoose.models={}

const Userschema = mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:Number,required:true},
    rating:{type:Number,required:false},
    role:{type:String,enum:["user","admin"],default:"user"}
})

const User = mongoose.model("Usermodel",Userschema,"usermodels")

export default User