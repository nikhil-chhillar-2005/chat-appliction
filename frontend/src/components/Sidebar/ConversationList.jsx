import React from 'react'
import Conversation from './Conversation'
import  UseGetConversations  from '../../hooks/UseGetConversations'
import { getRandomEmoji } from '../utils/Getemoji';
const Conversationlist = () => {
   const {loading,conversations}=UseGetConversations();
  //  console.log(conversations);
   
  return (
    <div className='flex flex-col h-[70%] overflow-auto pb-2 mb-2 '>
      {
        conversations?.map((conversation,idx)=>(
          <Conversation key={conversation._id} conversatione={conversation} emoji={getRandomEmoji()} lastidx={idx===conversations.length-1} />
        ))
      }
      {
        loading?<span className='loading loading-spinner'></span>:null
      }
    </div>
  )
}

export default Conversationlist