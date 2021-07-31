import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Join from './components/Join'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Join}></Route>{' '}
        <Route path='/chat' exact component={Chat}></Route>{' '}
      </Router>
    </div>
  )
}

export default App
