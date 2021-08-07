import './App.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Join from './components/Join'
import { useState } from 'react'

function App() {
  const [id, setId] = useState('')
  return (
    <div className='App'>
      {id}
      <Login onIdSubmit={setId} />
    </div>
  )
}

export default App
