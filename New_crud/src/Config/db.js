// mongodb+srv://Harsh_808:<db_password>@ecom.xxh970b.mongodb.net/
// mongodb://localhost:27017/
import mongoose from "mongoose"
const connectdb = async() => {
    const mongo_url = "mongodb://localhost:27017/Mongo_crud";
   await mongoose.connect(mongo_url)
   console.log("connected");
   
}

export default connectdb