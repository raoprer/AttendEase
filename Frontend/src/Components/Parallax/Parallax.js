import React from 'react'
import img1 from '../../Images/landing_bg.jpeg'
import Login from '../LoginSignup/Login'

const Parallax = (props) => {
  let pid = props.id
  let content = ''
  if (pid === 2) {
    content = <Login />
  }
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="container-fluid parallax-box">{content}</div>
    </div>
  )
}

export default Parallax
