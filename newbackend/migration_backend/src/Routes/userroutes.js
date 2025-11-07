import express from 'express'
import { UserSignup } from '../controller/Usercontroller.js'

const UserRouter = express.Router()


UserRouter.post("/",UserSignup)

export  default UserRouter