import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Messagecontainer from '../../components/Messagecontiner/Messagecontainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg py-2 px-5 bg-opacity-0'>
        <Sidebar />
        <Messagecontainer />
    </div>
  )
}

export default Home