import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Uselogouts = () => {
    const {setuser} = useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    const logouts=async()=>{
        setLoading(true);
        try {
            const res= await axios.post("/api/auth/logout");
            localStorage.removeItem("chat-app-user");
            setuser(null);
            window.location.reload();
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            setLoading(false);
        }
    }
    
    return {loading,logouts};

}

export default Uselogouts