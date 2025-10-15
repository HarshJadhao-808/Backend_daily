import express from 'express'
import usermodel from '../models/usermodel.js'
import { createuser } from '../controller/usercontrollers.js'


const userrouter = express.Router()

userrouter.post("/signup",createuser)



export default userrouter