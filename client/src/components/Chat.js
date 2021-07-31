import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT = 'localhost:5000'
  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)
    console.log({ name, room })
    console.log(socket)
  }, [ENDPOINT, location.search])
  return <div>Chat</div>
}

export default Chat
