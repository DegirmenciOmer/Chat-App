import React, { useRef } from 'react'
import { Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container
      className='align-items-center d-flex'
      style={{ height: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className=' mx-auto  w-50'>
        <Form.Group className='mb-2'>
          <Form.Control
            placeholder='Enter Your Id'
            type='text'
            ref={idRef}
            required
          />
        </Form.Group>
        <ButtonGroup className='w-100 ' aria-label='Basic example'>
          <Button type='submit'>Login</Button>
          <Button onClick={createNewId} variant='secondary'>
            Create A New Id
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}
