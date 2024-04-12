import './App.css'
import Home from './Pages/Home'
import LoginSignup from './Pages/LoginSignup'
import Profile from './Pages/Profile'
import ProfileComplete from './Pages/ProfileComplete'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/faculty/profile/:id" element={<Profile id={2} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
