import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import { Button } from 'react-bootstrap'
import { useToggleSidebar } from './../contexts/ToggleSidebarProvider'

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  const { toggleSidebar } = useToggleSidebar()

  return (
    <>
      <Button className='menu-btn' variant='primary' onClick={toggleSidebar}>
        Menu
      </Button>
      <div className='d-flex' style={{ height: '100vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
      </div>
    </>
  )
}
