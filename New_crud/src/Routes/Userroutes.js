import express from 'express'
import User from '../Models/User.js';
import { Deletefun, Getfun, Getonefun, Postun, Updatefun } from '../Controller/usercontroller.js';
let Userrouter = express.Router()

Userrouter.post("/", Postun);

Userrouter.get("/", Getfun);
Userrouter.get("/:id", Getonefun);

Userrouter.put("/:id", Updatefun);

Userrouter.delete("/:id",Deletefun);


export default Userrouter