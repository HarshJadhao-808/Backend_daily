import dotenv from "dotenv";

dotenv.config()

const tokencheck = async(req,res,next) => {
    let token = req.headers.token
}

export default tokencheck