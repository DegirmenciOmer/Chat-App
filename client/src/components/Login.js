import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { v4 as uuidV4 } from 'uuid'
import { Button, Container, Form } from 'react-bootstrap'

let socket

const Login = ({ onIdSubmit }) => {
  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }
  const generateId = () => {
    onIdSubmit(uuidV4())
  }
  return (
    <Container
      className='align-items-center d-flex'
      style={{ height: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type='text' ref={idRef}></Form.Control>
        </Form.Group>
        <Button type='submit' className='mr-2'>
          Login
        </Button>
        <Button onClick={generateId} variant='secondary' className='ml-2'>
          Create A New Id
        </Button>
      </Form>
    </Container>
  )
}

export default Login
