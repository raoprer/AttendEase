import React from 'react'

const HomeContent = () => {
  return (
    <div>
      {/* Banner Section */}
      <section id="banner" class="py-5">
        <div class="container text-center">
          <h1 class="display-4">Welcome to AttendEase</h1>
          <p class="lead">
            Revolutionizing Attendance Management with Facial Recognition
          </p>
          <p>
            Certainly! Here's some content for the startup of the page: Welcome
            to the Attendance Management System Using Facial Recognition Our
            innovative system revolutionizes traditional attendance tracking
            methods by leveraging cutting-edge facial recognition technology.
            Designed to streamline the process of monitoring student attendance
            in classrooms, our web-based application offers a seamless and
            efficient solution for educators, students, and administrators
            alike. With a focus on accuracy, reliability, and user-friendliness,
            our system aims to enhance classroom management practices while
            reducing manual effort and administrative burden. By automating
            attendance tracking through facial recognition, educators can
            allocate more time to teaching, and students can benefit from a more
            efficient learning environment. Explore our platform to discover how
            facial recognition technology is shaping the future of attendance
            management in educational institutions. Join us on this journey
            towards improved efficiency, accuracy, and convenience in classroom
            attendance tracking.
          </p>
          <a href="#features" class="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Attendance Tracking</h3>
                  <p class="card-text">
                    No more manual attendance taking. AttendEase automatically
                    records attendance using facial recognition.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Real-time Insights</h3>
                  <p class="card-text">
                    Get instant insights into attendance patterns, trends, and
                    statistics to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Enhanced Security</h3>
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

      {/* How It Works Section */}
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
                Setting up AttendEase is easy. Simply install the software,
                enroll participants, and start tracking attendance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4 title">Contact Us</h2>

          <div class="row">
            <div class="col-md-6 first">
              <h3>Get in Touch</h3>
              <p>
                Have questions or need assistance? Reach out to us and our team
                will be happy to help.
              </p>
              <ul class="list-unstyled">
                <li>
                  <i class="bi bi-geo-alt"></i> 123 Main Street, City, Country
                </li>
                <li>
                  <i class="bi bi-telephone"></i> +123 456 7890
                </li>
                <li>
                  <i class="bi bi-envelope"></i> info@attendease.com
                </li>
              </ul>
            </div>

            <div class="col-md-6 second">
              <h3>Contact Form</h3>
              <form action="#" method="post">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
