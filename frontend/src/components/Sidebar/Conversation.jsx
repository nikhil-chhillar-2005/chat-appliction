import React, { useContext } from "react";
import useConversation from "../../zustand/useZustand";
import { Socketcontext } from "../../Context/Socketcontext";

const Conversation = ({ conversatione, emoji, lastidx }) => {

  const {  selectedConversation,setSelectedConversation,setMessages } = useConversation();
  const isSelected = selectedConversation?._id === conversatione._id;
  const {onlineuser}=useContext(Socketcontext)

  const isonline=onlineuser.includes(conversatione._id)

  // console.log(setselectedConversation);
  return (
    <div>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 ${
          isSelected ? "bg-sky-500" : ""
        } cursor-pointer`}
       onClick={()=> {
        if (!isSelected) {
          setSelectedConversation(conversatione)
        setMessages([]);
        }
        
      } }
      >
        <div className="avatar ">
          <div className={`w-12 ${isonline?"avatar-online":""} rounded-full `}>
            <img src={conversatione.profilePic} alt="user avtar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 items-center justify-between">
            <p className="font-bold text-gray-200 ">{conversatione.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {lastidx ? <></> : <div className="divider my-0 py-0 h-1"></div>}
    </div>
  );
};

export default Conversation;
