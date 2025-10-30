
import './App.css'
import 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return(
     <Routes>
      <Route path='/home/' element={<LandingPage/>} />
   </Routes>
  )
  
}

export default App
