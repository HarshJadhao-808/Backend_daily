import express from 'express'
import connectdb from './Config/db.js'
import User from './Models/User.js'
import router from './Routes/allroutes.js'
const app = express()

app.use(express.json())

connectdb()

app.use("/",router)

const port = 4000
app.listen(port,()=>{
  
    console.log(`server is running on http://localhost:${port}`);
    
})