import React from 'react'
import { Link } from 'react-router-dom'
import teaching from '../../Images/home_teaching.png'

const HomeContent = () => {
  return (
    <div>
      {/* Banner Section */}
      <section id="banner" class="py-5">
        <div class="container text-center">
          <h1 class="heading">Welcome to AttendEase</h1>
          <p class="sub-heading lead">
            Revolutionizing Attendance Management with Facial Recognition
          </p>
          <div class="container">
            <div class="row">
              <div class="col-lg-6" style={{ textAlign: 'justify' }}>
                Welcome to the Attendance Management System Using Facial
                Recognition Our innovative system revolutionizes traditional
                attendance tracking methods by leveraging cutting-edge facial
                recognition technology. Designed to streamline the process of
                monitoring student attendance in classrooms, our web-based
                application offers a seamless and efficient solution for
                educators, students, and administrators alike. With a focus on
                accuracy, reliability, and user-friendliness, our system aims to
                enhance classroom management practices while reducing manual
                effort and administrative burden. By automating attendance
                tracking through facial recognition, educators can allocate more
                time to teaching, and students can benefit from a more efficient
                learning environment. Explore our platform to discover how
                facial recognition technology is shaping the future of
                attendance management in educational institutions. Join us on
                this journey towards improved efficiency, accuracy, and
                convenience in classroom attendance tracking.
              </div>
              <div class="col-lg-6">
                <img src={teaching} alt=""></img>
              </div>
            </div>
          </div>
          <Link
            to="/login"
            style={{ textDecoration: 'none' }}
            class="btn btn-dark btn-lg m-1"
          >
            Login
          </Link>
          {/* <a href="" class="btn btn-outline-dark btn-lg m-1">
            SignUp
          </a> */}
        </div>
      </section>

      {/* Features Section  */}
      <section id="features" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex align-items-stretch text-center">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Attendance Tracking</h3>
                  <i class="fa-regular fa-calendar-days fa-4x p-3"></i>
                  <p class="card-text">
                    No more manual attendance taking. AttendEase automatically
                    records attendance using facial recognition.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch text-center">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Real-time Insights</h3>
                  <i class="fa-solid fa-chalkboard-user fa-4x p-3"></i>
                  <p class="card-text">
                    Get instant insights into attendance patterns, trends, and
                    statistics to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch text-center">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Enhanced Security</h3>
                  <i class="fa-solid fa-shield fa-4x p-3"></i>
                  <p class="card-text">
                    Ensure only authorized individuals are present with advanced
                    facial recognition technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section  */}
      <section id="how-it-works" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">How AttendEase Works</h2>
          <div class="row">
            <div class="col-md-6">
              <h3>Facial Recognition</h3>
              <p>
                AttendEase uses advanced facial recognition algorithms to
                accurately identify and track individual's attendance.
              </p>
            </div>

            <div class="col-md-6">
              <h3>Simple Setup</h3>
              <p>
                Setting up AttendEase is easy. Simply install the software
                ,enroll participants, and start tracking attendance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
