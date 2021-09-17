import React from 'react'
import { useToggleSidebar } from './../contexts/ToggleSidebarProvider'
import { useConversations } from '../contexts/ConversationsProvider'

import { Button, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  const { toggleSidebar } = useToggleSidebar()
  const { selectedConversation } = useConversations()

  return (
    <Navbar
      style={{ height: '10vh' }}
      bg='primary'
      className='d-flex justify-content-between px-3'
    >
      <Nav>
        <Button variant='outline-dark' onClick={toggleSidebar}>
          Menu
        </Button>
      </Nav>

      <Nav>
        {selectedConversation.recipients.map((recipient) => recipient.name)}
      </Nav>
    </Navbar>
  )
}

export default Header