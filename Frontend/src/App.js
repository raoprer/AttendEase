import './App.css'
import Home from './Pages/Home'
import LoginSignup from './Pages/LoginSignup'
import Profile from './Pages/Profile'
import ProfileComplete from './Pages/ProfileComplete'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <LoginSignup login={0} /> */}
      {/* <ProfileComplete id={2} /> */}
      <Profile id={2} />
    </>
  )
}

export default App
