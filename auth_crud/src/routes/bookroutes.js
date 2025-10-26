import express from 'express'
import { addbook, changebook, deletebook, showbooks, showonebook } from '../controller/bookscontoller.js'
import protect from '../middleware/authmiddleware.js'


const bookrouter = express.Router()



bookrouter.post("/post",protect,addbook)

bookrouter.get("/get",protect,showbooks)

bookrouter.get("/getone/:id",protect,showonebook)

bookrouter.put("/update/:id",protect,changebook)

bookrouter.delete("/delete/:id",protect,deletebook)


export default bookrouter