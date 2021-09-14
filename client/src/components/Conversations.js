import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations({ toggleSideBar }) {
  const { conversations, selectConversationIndex } = useConversations()

  const handleClick = (ind) => {
    selectConversationIndex(ind)
    toggleSideBar()
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
