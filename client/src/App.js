import './App.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Join from './components/Join'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'

function App() {
  const [id, setId] = useLocalStorage('id')
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
}

export default App
