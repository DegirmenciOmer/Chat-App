import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import { useToggleSidebar } from '../contexts/ToggleSidebarProvider'

const IntroModal = ({ show, setShow }) => {
  const { toggleSidebar } = useToggleSidebar()

  const handleClose = () => {
    setShow(false)
    toggleSidebar()
  }

  const style = {
    backgroundColor: '#8BC6EC',
  }
  return (
    <Modal
      centered
      className='gradient-bg'
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header style={style}>
        <Modal.Title>Let's start!</Modal.Title>
      </Modal.Header>
      <Modal.Body style={style}>
        <ol>
          <li>First, you need to add your friends to your contacts.</li>
          <li>
            Then you need to start a conversation by selecting from your
            contacts.
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer style={style}>
        <Button variant='primary' onClick={handleClose}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default IntroModal
