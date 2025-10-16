import express from 'express'
import { addbook } from '../controller/bookscontoller.js'
import protect from '../middleware/authmiddleware.js'


const bookrouter = express.Router()



bookrouter.post("/post",protect,addbook)


export default bookrouter