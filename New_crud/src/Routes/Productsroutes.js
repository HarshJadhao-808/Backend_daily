import express from 'express'

import {postfun , getfun , getone, updatefun , deletefun} from '../Controller/productscontroller.js'

let Productrouter = express.Router()

Productrouter.post("/",postfun);

Productrouter.get("/",getfun)

Productrouter.get("/:id",getone)

Productrouter.put("/:id",updatefun)

Productrouter.delete("/:id",deletefun)

export default Productrouter