import express from 'express'
import User from '../Models/User.js';
import { Deletefun, Getfun, Getonefun, Postun, Updatefun } from '../Controller/usercontroller.js';
let router = express.Router()

router.post("/", Postun);

router.get("/", Getfun);
router.get("/:id", Getonefun);

router.put("/:id", Updatefun);

router.delete("/:id",Deletefun);


export default router