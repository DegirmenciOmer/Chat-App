import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

const DEV_URL = 'http://localhost:5000/'
const PRODUCTION_URL = 'https://dry-thicket-16746.herokuapp.com/'

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io(PRODUCTION_URL, { query: { id } })

    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
