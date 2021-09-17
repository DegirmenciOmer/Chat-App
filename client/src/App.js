import './App.css'
import React from 'react'

import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider'
import { ToggleSidebarProvider } from './contexts/ToggleSidebarProvider'

function App() {
  const [id, setId] = useLocalStorage('id', null)
  const dashboard = (
    <SocketProvider id={id}>
      <ToggleSidebarProvider>
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      </ToggleSidebarProvider>
    </SocketProvider>
  )
  return id ? dashboard : <Login onIdSubmit={setId} />
}

export default App
