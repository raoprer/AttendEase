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
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginSignup login={1} />} />
          <Route path="/signup" element={<LoginSignup login={0} />} />
          <Route path="/institute/profile/:id" element={<Profile id={1} />} />
          <Route path="/faculty/profile/:id" element={<Profile id={2} />} />
          <Route path="/student/profile/:id" element={<Profile id={3} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
