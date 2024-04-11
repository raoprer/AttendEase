import React from 'react'
import Parallax from '../Components/Parallax/Parallax'
import LoginContent from '../Components/LoginSignup/LoginContent'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Login = () => {
  const tag = (
    <div className="pt-2 pb-5">
      <LoginContent />
    </div>
  )
  return (
    <>
      <Navbar hide={1} />
      <Parallax tag={tag}></Parallax>
      <Footer />
    </>
  )
}

export default Login
