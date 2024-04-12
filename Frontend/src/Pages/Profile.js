import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Parallax from '../Components/Parallax/Parallax'
import ProfileInstitute from '../Components/Profile/ProfileInstitute'
import ProfileFaculty from '../Components/Profile/ProfileFaculty'
import ProfileStudent from '../Components/Profile/ProfileStudent'

const Profile = (props) => {
  let profile = props.id
  let tag = ''
  if (profile === 1) {
    tag = (
      <div className="pt-2 pb-5">
        <ProfileInstitute />
      </div>
    )
  }
  if (profile === 2) {
    tag = (
      <div className="pt-2 pb-5">
        <ProfileFaculty />
      </div>
    )
  }
  if (profile === 3) {
    tag = (
      <div className="pt-2 pb-5">
        <ProfileStudent />
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

export default Profile
