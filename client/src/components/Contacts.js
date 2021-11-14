import React, { useEffect, useRef } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'
import { useToggleSidebar } from '../contexts/ToggleSidebarProvider'

const Contacts = () => {
  const { createConversation, conversations } = useConversations()
  const { contacts } = useContacts()
  const { toggleSidebar } = useToggleSidebar()

  const newConversationRef = useRef()

  useEffect(() => {
    //newConversationRef.addEventListener('click', startConversation)
    console.log(newConversationRef.current.value)
    return () => {}
  }, [])

  const startConversation = (id) => {
    const alreadyExists = conversations.find(
      (conversation) => conversation.recipients[0].id === id
    )

    toggleSidebar()
    if (alreadyExists) return
    createConversation([id])
  }

  console.log({ conversations })
  return (
    <ListGroup variant='flush'>
      {contacts.map((contact) => (
        <ListGroup.Item
          key={contact.id}
          ref={newConversationRef}
          onClick={() => startConversation(contact.id)}
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
