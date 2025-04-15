const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const GenerateToken=(userID,res)=>{
    const token=jwt.sign({userID},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",
    });
    
    res.cookie("jwt",token,{
        httpOnly:true,  // Only accessible by the web server
        sameSite:"strict", // Prevent CSRF attacks
        maxAge:15*24*60*60*1000, // 15 days
        secure:process.env.NODE_ENV!=="development", // Only set the cookie to be sent over HTTPS in production
    });
}
module.exports=GenerateToken;