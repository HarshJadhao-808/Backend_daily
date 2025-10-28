import  express from 'express'
import protect from '../middleware/authmiddleware.js'
import { rolecheck } from '../middleware/rolecheck.js'
import { getall } from '../controller/admincontroller.js'

const adminrouter = express.Router()

adminrouter.get("/getall",protect,rolecheck("admin"),getall)

export default adminrouter