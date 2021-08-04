import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:5000'
  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)
    socket.emit('join', { name, room }, ({ error }) => alert(error))
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])
  useEffect(() => {
    socket.on('message', () => {
      setMessages([...messages, message])
    })
  }, [messages])
  // function for sending mesages
  function sendMessage(e) {
    e.preventDefault()
    message && socket.emit(sendMessage, message, () => setMessage(''))
  }
  console.log({ message, messages })

  return (
    <div className='outerContainer'>
      <div className='container'>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage(e)}
        />
      </div>
    </div>
  )
}

export default Chat
