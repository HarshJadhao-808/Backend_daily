import express from 'express'
import { Signupfun } from '../controller/Usercontroller.js'

const UserRouter = express.Router()

UserRouter.post("/signup",Signupfun)

export default UserRouter