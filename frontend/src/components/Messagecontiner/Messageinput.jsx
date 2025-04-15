import React from 'react'
import { BsSend } from 'react-icons/bs'
import Usesendmessages  from '../../hooks/Usesendmessages';

const Messageinput = () => {
  const [message, setmessage] = React.useState('');
  const {sendmessage,loading}=Usesendmessages();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    if(message.trim().length===0){
      return;
    }
     await sendmessage(message);
    setmessage('');
    // console.log(message);
  }

  return (
    <form className='px-4 my-3 ' onSubmit={handlesubmit}>
        <div className='w-full relative '>
            <input 
            type="text"
            value={message}
            onChange={(e)=>setmessage(e.target.value)}
            className='border text-sm rounded-lg block w-full  p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='Type your message here...'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4 cursor-pointer justify-center '> 
                {
                    loading?<span className='loading loading-spinner'></span>: <div><BsSend  /></div>
                }
            </button>
        </div>
    </form>
  )
}

export default Messageinput