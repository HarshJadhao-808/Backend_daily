import usermodel from "../models/usermodel"
import bcrypt from 'bcrypt'
export const createuser = async(req,res) => {
    const {name , email , password , role} = req.body

    const exist_user = usermodel.findOne({email})

    if(exist_user){
        res.status(400).json({message:"User already exists" ,exist_user})
    }
    const hashed_pass  = bcrypt.hash(password , 10)
    const user = await usermodel.create({
        name,
        email,
        password:hashed_pass,
        role
    })
}