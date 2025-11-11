import mongoose from "mongoose";
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'

export const Signupfun = async() => {
    const {name,email,password,role} = req.body

    const hashed_password = bcrypt.hash(password,10)
    let data = await mongoose.create({
        name,
        email,
        hashed_password,
        role
    })
    res.json({message:"User Created",data})
    
}