import './App.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Join from './components/Join'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'

function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
  return id ? dashboard : <Login onIdSubmit={setId} />
}

export default App
