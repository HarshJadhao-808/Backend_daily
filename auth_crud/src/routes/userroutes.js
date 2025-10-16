import express from 'express'
import usermodel from '../models/usermodel.js'
import { createuser, logincontroller } from '../controller/usercontrollers.js'


const userrouter = express.Router()

userrouter.post("/signup",createuser)

userrouter.post("/login",logincontroller)



export default userrouter