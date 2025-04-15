import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { set } from 'mongoose';

const Uselogin = () => {
  const [loading,setLoading] = useState(false);

    const {setuser} = useContext(AuthContext);

  const logins=async({username,password})=>{
    setLoading(true);
    try {
        const res=await axios.post("/api/auth/login",{
            username,
            password
        });
        localStorage.setItem("chat-app-user",JSON.stringify(res.data));
        setuser(res.data);
        toast.success("Login Successfull");

    } catch (error) {
        toast.error(error.response.data.message);
    }finally{
        setLoading(false);
    }
}
    return {loading,logins};
}

export default Uselogin