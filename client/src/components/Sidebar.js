import React, { useState } from 'react'
import { Tab, Nav, Button, Modal, Offcanvas, Row } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'
import { useToggleSidebar } from './../contexts/ToggleSidebarProvider'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
  const { contacts } = useContacts()
  const { show, toggleSidebar } = useToggleSidebar()
  const [activeKey, setActiveKey] = useState(
    contacts.length === 0 ? CONTACTS_KEY : CONVERSATIONS_KEY
  )
  const [modalOpen, setModalOpen] = useState(false)

  const { conversations } = useConversations()

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Offcanvas
        show={show}
        onHide={toggleSidebar}
        style={{ width: '350px' }}
        className='d-flex flex-column'
      >
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Offcanvas.Header as={Row} closeButton>
            <Nav
              style={{ cursor: 'pointer' }}
              variant='tabs'
              className='justify-content-center flex-row'
            >
              <Offcanvas.Title>
                <Nav.Item>
                  <Nav.Link eventKey={CONVERSATIONS_KEY}>
                    Conversations
                  </Nav.Link>
                </Nav.Item>
              </Offcanvas.Title>
              <Offcanvas.Title>
                <Nav.Item>
                  <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
              </Offcanvas.Title>
            </Nav>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Tab.Content className='left-tab-container border-right overflow-auto flex-grow-1'>
              <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                {conversations.length === 0 ? (
                  <p bg='warning' className='warning text-center'>
                    You have no conversations yet
                  </p>
                ) : (
                  <Conversations />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey={CONTACTS_KEY}>
                {contacts.length > 0 ? (
                  <Contacts />
                ) : (
                  <p className='warning text-center'>
                    You have no contacts yet
                  </p>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Offcanvas.Body>

          <div className='p-2 border-top border-right small'>
            Your Id: <span className='text-muted'>{id}</span>
          </div>
          <Button onClick={() => setModalOpen(true)} className='rounded-0'>
            New {activeKey === CONVERSATIONS_KEY ? 'Conversation' : 'Contact'}
          </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
          {activeKey === CONVERSATIONS_KEY ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </Offcanvas>
    </>
  )
}
