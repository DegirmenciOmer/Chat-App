import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

const Contacts = () => {
  const { contacts } = useContacts()
  return (
    <ListGroup variant='flush'>
      {contacts.map((contact) => (
        <ListGroup.Item key={contact.id}>
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
