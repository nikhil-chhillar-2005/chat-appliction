import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Usesignup = () => {
  const [loading, setLoading] = useState(false);
    const {setuser}=useContext(AuthContext);
   
    

  const signin=async({fullName,username,password,confirmPassword,gender})=>{
  const success=handleinputerror({fullName,username,password,confirmPassword,gender});
    if(!success) return;
    setLoading(true);
    try {
        const res=   await axios.post("/api/auth/signup",{fullName,username,password,confirmPassword,gender});
        localStorage.setItem("chat-app-user",JSON.stringify(res.data));
        setuser(res.data);
        toast.success("Signup successfully");      
    } catch (error) {
        toast.error(error.response.data.message);
    }finally{
        setLoading(false);
    }

}
return {loading,signin}

}

export default Usesignup
const handleinputerror=({fullName,username,password,confirmPassword,gender})=>{
    if(!fullName || !username||!password||!confirmPassword||!gender){
        toast.error("All fields are required")
        return false;
    }
    if(password!==confirmPassword){
        toast.error("Password and confirm password should be same")
        return false;
    }
    if(password.length<6){
        toast.error("Password should be at least 6 characters long")
        return false;
    }
    return true;
}