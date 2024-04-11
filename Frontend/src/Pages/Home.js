import React from 'react'
import HomeContent from '../Components/Home/HomeContent'
import Navbar from '../Components/Navbar/Navbar'
import Parallax from '../Components/Parallax/Parallax'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  const tag = (
    <div className="pt-2 pb-5">
      <HomeContent />
    </div>
  )
  return (
    <div>
      <Navbar hide={0} />
      <Parallax tag={tag} />
      <Footer />
    </div>
  )
}

export default Home
