import React from 'react'
import Searchinput from './Searchinput'
import Conversationlist from './ConversationList'
import Logout from './logout'
const Sidebar = () => {
  return (
    <div>
      <Searchinput />
      <div className='divider px-3'></div>
      <Conversationlist/>
      <Logout/>
    </div>
  )
}

export default Sidebar