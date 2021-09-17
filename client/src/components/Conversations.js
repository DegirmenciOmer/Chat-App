import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'
import { useToggleSidebar } from './../contexts/ToggleSidebarProvider'

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()
  const { toggleSidebar } = useToggleSidebar()

  const handleClick = (ind) => {
    selectConversationIndex(ind)
    toggleSidebar()
  }

  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => handleClick(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map((r) => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
