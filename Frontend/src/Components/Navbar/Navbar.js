import React from 'react'
import logo from '../../Images/AttendEaseLogo.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  let hide = props.hide
  let hidden = hide ? 'invisible' : 'collapse navbar-collapse'
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link to="/home">
            <img src={logo} alt="AttendEase"></img>
          </Link>
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
                <a class="nav-link nav-btn" href="#how-it-works">
                  <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Login
                  </Link>
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
