import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const LoginContent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [loggedIn, setLoggedIn] = useState(false) // State to track login status
  const [facultyId, setFacultyId] = useState(null) // State to store faculty ID
  const [instituteId, setInstituteId] = useState(null)
  const [studentId, setStudentId] = useState(null)

  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!role) {
      alert('Please select a role.')
      return
    }
    setUsername(document.getElementById('username').value)
    setPassword(document.getElementById('password').value)
    try {
      if (role === 'faculty') {
        // Fetch faculty data from the API
        const response = await axios.get('http://127.0.0.1:8000/faculty')
        const facultyData = response.data

        // Check if entered username is present in faculty data and password is correct
        const faculty = facultyData.find(
          (faculty) =>
            faculty.emp_id === username && faculty.f_password === password
        )

        if (faculty) {
          // Update state to indicate successful login and set faculty ID
          setLoggedIn(true)
          setFacultyId(faculty.f_id - 1) // Decrement faculty ID by 1
        } else {
          // Display error message if login fails
          alert('Invalid username or password.')
        }
      }
      if (role === 'institute') {
        // Fetch institute data from the API
        const response = await axios.get('http://127.0.0.1:8000/institute')
        const instituteData = response.data

        // Check if entered username is present in institute data and password is correct
        const institute = instituteData.find(
          (institute) =>
            institute.i_code === username && institute.i_password === password
        )

        if (institute) {
          // Update state to indicate successful login and set institute ID
          setLoggedIn(true)
          setInstituteId(institute.i_id - 1) // Decrement institute ID by 1
        } else {
          // Display error message if login fails
          alert('Invalid username or password.')
        }
      }
      if (role === 'student') {
        // Fetch student data from the API
        const response = await axios.get('http://127.0.0.1:8000/student')
        const studentData = response.data

        // Check if entered username is present in student data and password is correct
        const student = studentData.find(
          (student) =>
            student.reg_no === username && student.s_password === password
        )

        if (student) {
          // Update state to indicate successful login and set student ID
          setLoggedIn(true)
          setStudentId(student.s_id - 1) // Decrement student ID by 1
        } else {
          // Display error message if login fails
          alert('Invalid username or password.')
        }
      }
    } catch (error) {
      // Handle error
      console.error('Login failed:', error)
    }
  }

  // Redirect to faculty profile if logged in
  if (loggedIn && role === 'faculty') {
    return <Navigate to={`/faculty/profile/${facultyId}`} />
  }
  if (loggedIn && role === 'institute') {
    return <Navigate to={`/institute/profile/${instituteId}`} />
  }
  if (loggedIn && role === 'student') {
    return <Navigate to={`/student/profile/${studentId}`} />
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  ></input>
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Role</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="institute"
                      value="institute"
                      onChange={handleRoleChange}
                    ></input>
                    <label className="form-check-label" htmlFor="institute">
                      Institute
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="faculty"
                      value="faculty"
                      onChange={handleRoleChange}
                    ></input>
                    <label className="form-check-label" htmlFor="faculty">
                      Faculty
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="student"
                      value="student"
                      onChange={handleRoleChange}
                    ></input>
                    <label className="form-check-label" htmlFor="student">
                      Student
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginContent
