import React from 'react'
import bg from '../../Images/background.jpeg'

const Parallax = (props) => {
  let tag = props.tag
  return (
    <div
      className="parallax-bg"
      style={{
        backgroundImage: `url(${bg})`,
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      {tag}
    </div>
  )
}

export default Parallax
