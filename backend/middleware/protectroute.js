const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const User=require("../Models/usermodel"); // Import the User model

const ProtectRoute= async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        
        if(!token){
            return res.status(401).json({message:"unauthorized user"});
        }
        const verify=jwt.verify(token,process.env.JWT_SECRET_KEY); 
        if(!verify){
            return res.status(401).json({message:"unauthorized user-invalid token"});
        }
        const user=await User.findById(verify.userID).select("-password"); // Exclude password field from the user object
        if(!user){
            return res.status(401).json({message:"unauthorized user -user not found"});
        }
        req.user=user; // Attach the user object to the request for further use in the route handler
        next(); // Call the next middleware or route handler
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error" });
    }
}

module.exports=ProtectRoute;