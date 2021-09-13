import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

const Conversations = ({ closeSideBar }) => {
  const { conversations, selectConversationIndex } = useConversations()

  const handleClick = (index) => {
    selectConversationIndex(index)
    closeSideBar()
  }

  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={handleClick(index)}
        >
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Conversations
