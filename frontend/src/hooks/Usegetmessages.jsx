import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import useConversation  from '../zustand/useZustand'


const Usegetmessages = () => {
  const [loading, setLoading] = React.useState(false);
  const {messages, setMessages, selectedConversation} = useConversation();

  useEffect(()=>{
    const getmessage=async()=>{
        setLoading(true);
        try {
            const res=await axios.get(`/api/message/${selectedConversation._id}`);
           
            setMessages(res.data.messages);

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
    }finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id){
        getmessage();
    }
  },[selectedConversation?._id,setMessages])  
  
  return {loading,messages}

}

export default Usegetmessages