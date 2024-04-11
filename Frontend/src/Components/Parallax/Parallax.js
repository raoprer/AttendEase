import React from 'react'
import img1 from '../../Images/landing_bg.jpeg'

const Parallax = (props) => {
  let pid = props.id
  let tag = props.tag
  return (
    <div
      className="parallax-bg"
      style={{
        backgroundImage: `url(${img1})`,
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      {tag}
    </div>
  )
}

export default Parallax
