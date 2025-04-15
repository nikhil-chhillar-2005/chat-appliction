import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import useConversation  from '../zustand/useZustand'
import Usegetmessages from './Usegetmessages';
 const Usesendmessages = () => {
  const [loading, setLoading] = React.useState(false);
  const {messages, setMessages,selectedConversation} = useConversation();

    const sendmessage=async(message)=>{
        setLoading(true);
        try {
            // console.log(selectedConversation);
            
            const res=await axios.post(`/api/message/send/${selectedConversation._id}`,{
                message,
            });
            setMessages([...messages,res.data.newMessage]);
        
            // console.log(res);
            
            // console.log();
            
            
           
            

        } catch (error) {
            console.log(error);
            
            toast.error(error.response.data.message);
        }finally{
            setLoading(false);
        }
    }
    return {sendmessage,loading}
}

export default Usesendmessages;