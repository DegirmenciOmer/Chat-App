import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function OpenConversation() {
  const [text, setText] = useState('')
  const setRef = useCallback((node) => {
    //1:22:00 why useCallback is used
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])

  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    )
    setText('')
  }

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'>
        {selectedConversation.messages.length === 0 ? (
          <div className='warning no-message d-flex align-items-center justify-content-center '>
            <p>
              Start a conversation with
              {` ${selectedConversation.recipients
                .map((r) => r.name)
                .join(', ')}`}
            </p>
          </div>
        ) : (
          selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index
            return (
              <div
                key={index}
                className='d-flex flex-column align-items-start justify-content-end px-3'
              >
                <div
                  ref={lastMessage ? setRef : null}
                  className={`my-1 d-flex flex-column ${
                    message.fromMe
                      ? 'align-self-end align-items-end'
                      : 'align-items-start'
                  }`}
                >
                  <div
                    style={{ maxWidth: '75vw' }}
                    className={`rounded px-2 py-1  ${
                      message.fromMe ? 'text-white bg-secondary ' : 'bg-light'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div
                    className={`text-muted small ${
                      message.fromMe ? 'text-right' : ''
                    }`}
                  >
                    {message.fromMe ? 'You' : message.senderName}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
            <Form.Control
              as='textarea'
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <Button disabled={!text} style={{ fontSize: '25px' }} type='submit'>
              <i className='fa fa-paper-plane'></i>
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
