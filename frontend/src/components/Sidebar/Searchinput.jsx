import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/UseGetConversations";
import useConversation from "../../zustand/useZustand";
import toast from "react-hot-toast";
const Searchinput = () => {
  const [search, setSearch] = React.useState("");
  const {setSelectedConversation}=useConversation((state)=>state);
  const {conversations,setConversations}=useGetConversations();

  const handelSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3) return toast.error("Search term must be at least 3 characters long");

    const finded=conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(!finded) return toast.error("User not found");
    setSelectedConversation(finded);
    setSearch("")

  }

  return (
    <form onSubmit={handelSubmit} className="flex item-center gap-2">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" bg-gray-600 text-gray-200 input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchinput
