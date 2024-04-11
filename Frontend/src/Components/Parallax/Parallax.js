import React from 'react'
import img1 from '../../Images/landing_bg.jpeg'

const Parallax = (props) => {
  let pid = props.id
  let tag = props.tag
  let content = ''
  return (
    <div
      className="parallax-bg"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {tag}
    </div>
  )
}

export default Parallax
