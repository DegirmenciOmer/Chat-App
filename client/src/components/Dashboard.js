import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import Header from './Header'

import { useConversations } from '../contexts/ConversationsProvider'
import { useToggleSidebar } from '../contexts/ToggleSidebarProvider'

export default function Dashboard({ id }) {
  const [show, setShow] = useState(false)

  const { toggleSidebar } = useToggleSidebar()
  const { selectedConversation } = useConversations()

  const handleClose = () => {
    setShow(false)
    toggleSidebar()
  }

  useEffect(() => {
    !selectedConversation && setShow(true)
  }, [])

  return (
    <>
      <Header />

      <div className='gradient-bg d-flex' style={{ height: '90vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Let's start!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>
              <li>First, you need to add your friends to your contacts.</li>
              <li>
                Then you need to start a conversation by selecting from your
                contacts.
              </li>
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
