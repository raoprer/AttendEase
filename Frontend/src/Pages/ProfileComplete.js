import React from 'react'
import FacultyProfileComplete from '../Components/ProfileComplete/FacultyProfileComplete'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Parallax from '../Components/Parallax/Parallax'
import StudentProfileComplete from '../Components/ProfileComplete/StudentProfileComplete'
import InstituteProfileComplete from '../Components/ProfileComplete/InstituteProfileComplete'

const ProfileComplete = (props) => {
  let profile = props.id
  let tag = ''
  if (profile === 1) {
    tag = (
      <div className="pt-2 pb-5">
        <InstituteProfileComplete />
      </div>
    )
  }
  if (profile === 2) {
    tag = (
      <div className="pt-2 pb-5">
        <FacultyProfileComplete />
      </div>
    )
  }
  if (profile === 3) {
    tag = (
      <div className="pt-2 pb-5">
        <StudentProfileComplete />
      </div>
    )
  }
  return (
    <div>
      <Navbar hide={1} />
      <Parallax tag={tag} />
      <Footer />
    </div>
  )
}

export default ProfileComplete
