import mongoose from "mongoose"

mongoose

const dbconnect = async () => {
let mongo_url = "mongodb://localhost:27017/user"
mongoose.connect(mongo_url)
console.log("db conected");


}

export default dbconnect