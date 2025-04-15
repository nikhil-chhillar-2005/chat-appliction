import { useContext, useEffect } from "react"
import { Socketcontext } from "../Context/Socketcontext"
import useConversation from '../zustand/useZustand'
import notification from '../assets/sounds/notification.mp3'
const UseListenMessages = () => {
  const {socket}=useContext(Socketcontext);
  const {messages,setMessages}= useConversation();

  useEffect(()=>{
    socket?.on('newMessage',(newMessage)=>{
      newMessage.shake=true;
      const sound=new Audio(notification);
      sound.play(); 
      
      setMessages([...messages,newMessage]);
    })

    return ()=> socket?.off('newMessage');
  },[setMessages,socket,messages]);

}

export default UseListenMessages