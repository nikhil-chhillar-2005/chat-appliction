import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const UseGetConversations = () => {
    const [loading, setLoading] = useState(false);    
    const [conversations, setConversations] = useState([]);
    useEffect(()=>{
        const getconversations=async()=>{
            setLoading(true);
            try {
                const res=await axios.get('/api/user',{withCredentials:true});
                // console.log(res.data);
                
                setConversations(res.data.allUsers);           
            } catch (error) {
                console.log(error);
                toast.error(error.res.data.message);
            }finally{
                setLoading(false);
            }
        }
        getconversations();
    },[setConversations])
    return {loading, conversations,setConversations};
    
}

export default UseGetConversations;
