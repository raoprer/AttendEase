import React from 'react'
import Parallax from '../Components/Parallax/Parallax'
import LoginContent from '../Components/LoginSignup/LoginContent'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import SignupContent from '../Components/LoginSignup/SignupContent'

const LoginSignup = (props) => {
  const login = props.login
  const tag =
    login === 1 ? (
      <div className="pt-2 pb-5">
        <LoginContent />
      </div>
    ) : (
      <div className="pt-2 pb-5">
        <SignupContent />
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

export default LoginSignup
