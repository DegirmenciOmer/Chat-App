import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()
    //createConversation(selectedContactIds)
    closeModal()
    console.log('FormSubmit')
  }

  function handleCheckboxChange(id) {
    setSelectedContactIds((prevSlctIds) => {
      if (prevSlctIds.includes(id)) {
        return prevSlctIds.filter((prevId) => id !== prevId)
      } else {
        return [...prevSlctIds, id]
      }
    })
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create Conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                value={selectedContactIds.includes(contact.id)}
                type='checkbox'
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
