import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import  useConversation  from '../../zustand/useZustand'
import { extractTime } from '../utils/Extracttime';
const Message = ({message}) => {
  const {user}=useContext(AuthContext);
  const {selectedConversation}= useConversation();
  const fromme= message.senderID===user._id;
  const profilepic= fromme? user.profilePic : selectedConversation?.profilePic;
  const chatclassname= fromme? " chat-end" : " chat-start";
  const bublebg=fromme? "bg-blue-500 " : "bg-gray-500";
  const formattedTime= extractTime(message.createdAt);
  const shouldshake=message?.shake?"shake":""
  // console.log(message);
  

  return (
    <div className={`chat ${chatclassname}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilepic}/>
    </div>
  </div>
  <div className={`chat-bubble text-white ${bublebg} ${shouldshake} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
</div>
  )
}

export default Message