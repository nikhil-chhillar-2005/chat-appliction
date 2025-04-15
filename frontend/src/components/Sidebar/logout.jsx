import React from 'react'
import { BiLogOut } from "react-icons/bi";
import  UseLogouts  from '../../hooks/Uselogouts';
const logout = () => {
  const {loading,logouts}=UseLogouts();

  return (
    <div className='mt-auto'>
      {
        loading?<span className='loading loading-spinner'></span>:
        <BiLogOut className="w-6 h-6 cursor-pointer text-white"  onClick={logouts}
        />
      }
       
    </div>
  )
}

export default logout