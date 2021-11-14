import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'
import { useToggleSidebar } from '../contexts/ToggleSidebarProvider'

const Contacts = () => {
  const { createConversation, conversations, selectConversationIndex } =
    useConversations()
  const { contacts } = useContacts()
  const { toggleSidebar } = useToggleSidebar()

  const startConversation = (id, index) => {
    const alreadyExists = conversations.find(
      (conversation) =>
        conversation.recipients.length === 1 &&
        conversation.recipients[0].id === id
    )

    if (alreadyExists && alreadyExists.recipients[0].id === id) {
      selectConversationIndex(index)
    } else {
      createConversation([id])
    }
    toggleSidebar()
  }

  return (
    <ListGroup variant='flush'>
      {contacts.map((contact, index) => (
        <ListGroup.Item
          key={contact.id}
          onClick={() => startConversation(contact.id, index)}
        >
          <i
            style={{ fontSize: '21px', color: '#0d6efd' }}
            className='fa fa-user-circle'
          ></i>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Contacts
