import React from 'react'
import { useToggleSidebar } from './../contexts/ToggleSidebarProvider'
import { useConversations } from '../contexts/ConversationsProvider'

import { Button, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  const { toggleSidebar } = useToggleSidebar()
  const { selectedConversation } = useConversations()

  return (
    <Navbar
      style={{ height: '10vh', color: 'white' }}
      bg='dark'
      className='d-flex justify-content-between px-3'
    >
      <Nav>
        <Button variant='dark' onClick={toggleSidebar}>
          <i className='fa fa-bars'></i>
        </Button>
      </Nav>
      {selectedConversation && (
        <Nav style={{ fontSize: '1.5em', fontWeight: '400' }}>
          {selectedConversation.recipients.map((recipient) => recipient.name)}
        </Nav>
      )}
    </Navbar>
  )
}

export default Header
