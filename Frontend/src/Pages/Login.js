import React from 'react'
import Parallax from '../Components/Parallax/Parallax'
import LoginContent from '../Components/LoginSignup/LoginContent'

const Login = () => {
  const tag = <LoginContent />
  return (
    <>
      <Parallax id={2} tag={tag}></Parallax>
    </>
  )
}

export default Login
