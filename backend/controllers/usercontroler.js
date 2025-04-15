const User=require("../Models/usermodel");

const getuser=async (req,res)=>{
    try {
        const allUsers=await User.find({_id:{ $ne : req.user.id}}).select("-password ")
        res.status(200).json({ allUsers });
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error" });
    }
}

module.exports=getuser;