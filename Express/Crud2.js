import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

    const app = express()
      const port = process.env.CRUDPORT2
      app.listen(port,()=>{
          console.log(`server is running on http://localhost:${port}`)
    })

