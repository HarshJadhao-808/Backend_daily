import express from 'express'
import connectdb from './Config/db.js'
import User from './Models/User.js'
import Userrouter from './Routes/Userroutes.js'
import Productrouter from './Routes/Productsroutes.js'
import products from './Models/Products.js'
const app = express()

app.use(express.json())

connectdb()

app.use("/User",Userrouter)

app.use("/Products",Productrouter)

const port = 4000
app.listen(port,()=>{
  
    console.log(`server is running on http://localhost:${port}`);

})