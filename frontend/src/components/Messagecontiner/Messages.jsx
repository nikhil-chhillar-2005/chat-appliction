import React,{useRef,useEffect} from 'react'
import Message from './Message'
import Messageskeleton from '../skeleton/Messageskeleton'
import Usegetmessages from '../../hooks/Usegetmessages'
import UseListenMessages from '../../hooks/UseListenMessages'
const Messages = () => {
  const {loading,messages}=Usegetmessages();
	UseListenMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",   // Make sure it aligns to bottom
      }); 
		}, 100);
	}, [messages]);
  return (
    
    <div className='px-4 flex-1 overflow-auto'>

{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
     
      {loading && [...Array(3)].map((_, idx) => <Messageskeleton key={idx} />)}
     
      {!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages