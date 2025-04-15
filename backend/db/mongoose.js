const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const URL=process.env.MONGODB_URL;
const connect=async()=>{
    try {
        await mongoose.connect(URL)
        console.log("database connected");
        
    } catch (error) {
        console.log("error in mongodb connection:",error.message);
    }
}
module.exports=connect;