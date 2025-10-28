import usermodel from "../models/usermodel.js"


export const getall = async(req,res) => {
    try {
        const users =await usermodel.find().select("-password")
        res.send(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

