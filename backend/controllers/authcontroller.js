const User=require("../Models/usermodel");
const bcrypt=require("bcryptjs");
const gentoken=require("../utils/gentoken");
const Authcontroller={
    login:async(req,res)=>{
        try {
            const {username,password}=req.body;
            const user=await User.findOne({username});
            if(!user){
                return res.status(400).json({message:"user not found"})
            }

            const ispaspwordcorrect=await bcrypt.compare(password,user?.password||"");
            if(!ispaspwordcorrect){
                return res.status(400).json({message:"password is wrong"});
            }

            // Generate token here
            gentoken(user._id,res);

            return res.status(200).json({
                _id:user._id,
                fullName:user.fullName,
                username:user.username,
                profilePic:user.profilePic,
            });

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message:"internal server error"})      
        }
    },
    logout:async(req,res)=>{
        try {
            res.clearCookie("jwt","",{maxAge:0});
            return res.status(200).json({message:"logout successfully"})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message:"internal server error"})
        }
    },
    signup:async(req,res)=>{
        try {
            const {fullName,username,password,confirmPassword,gender}=req.body;
            
            
            if(password!==confirmPassword){
                return res.status(400).json({message:"password not match"})
            }
            const user=await User.findOne({username});
            if (user){
                return res.status(400).json({message:"user already exist"})
            }

            // Hash password here
            const salt=await bcrypt.genSalt(10);
            const hashedpassword=await bcrypt.hash(password,salt);


            const boyprofilepic=`https://avatar.iran.liara.run/public/boy?username=${username}`
            const girlprofilepic=`https://avatar.iran.liara.run/public/girl?username=${username}`

            const newuser=new User({
            fullName,
            username,
            password:hashedpassword,
            gender,
            profilePic:gender==="male"?boyprofilepic:girlprofilepic,
        });

        if(!newuser){
            return res.status(400).json({message:"user not created"})
        }
            // Save user to database
            gentoken(newuser._id,res);
            await newuser.save();
            return res.status(201).json({
                _id:newuser._id,
                fullName:newuser.fullName,
                username:newuser.username,
                profilePic:newuser.profilePic,
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message:"internal server error"})    
        }
    }
}

module.exports=Authcontroller;