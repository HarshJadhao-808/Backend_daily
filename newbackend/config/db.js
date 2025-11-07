import mongoose from "mongoose";

const connectdb = async() => {
      const db =await mongoose.connect("mongodb://localhost:27017/NewDb");
      console.log("db connected");
      
}

export default connectdb