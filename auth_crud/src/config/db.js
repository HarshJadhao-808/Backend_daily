import mongoose from "mongoose"

const dbconnect = async () => {
let mongo_url = "mongodb://localhost:27017/user"
await mongoose.connect(mongo_url)
console.log("db conected");


}

export default dbconnect