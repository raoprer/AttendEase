import React from 'react'
import logo from '../../Images/AttendEaseLogo.png'

const Navbar = (props) => {
  let hide = props.hide
  let hidden = hide ? 'invisible' : 'collapse navbar-collapse'
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            <img src={logo} alt="AttendEase Logo"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={hidden} id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact-us">
                  Contact Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-dark fw-medium " href="">
                  {' '}
                  Login/SignUp{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
