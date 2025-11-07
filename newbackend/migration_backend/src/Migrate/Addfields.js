import mongoose from "mongoose";
import connectdb from "../config/connectdb.js";
import User from "../Models/Usermodel.js";
import dotenv from "dotenv";

const fieldname = process.argv[2]
const action = process.argv[3]
dotenv.config()
const run = async() => {
    await connectdb(process.env.Monggo_url);
       
    if(action == "up"){
       let user = await User.updateMany(
        {age : {$exists : false}},
        {$set:{[fieldname]:0}})
        console.log({
            update_result : user.acknowledged,
            feild_status: "Added successfully",
            fieldName:fieldname
        })
    }else if(action == "down"){
        let user = await User.updateMany({},{$unset : {[fieldname]:''}})
         console.log({
						update_result: user.acknowledged,
						feild_status: "removed successfully",
						fieldName: fieldname,
					});
    }else{
        console.log("wrong arguement please use 'up 'or 'down'")
    }
    mongoose.connection.close()
}

run().catch(console.error)