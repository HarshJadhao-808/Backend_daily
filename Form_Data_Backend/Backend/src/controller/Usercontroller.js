import mongoose from "mongoose";
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'

export const Signupfun = async() => {
    const {name,email,password,role} = req.body

    const hashed_password = bcrypt.hash()
    let data = await mongoose.create({
        name,
        email,
        password,
        role
    })
    
}