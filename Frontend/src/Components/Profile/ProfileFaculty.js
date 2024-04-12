import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'

const ProfileFaculty = (props) => {
  const [faculty, setFaculty] = useState([])
  const [course, setCourse] = useState([])
  const [student, setStudent] = useState([])
  const i = props.pid.id //f_id
  console.log(i)
  let studentcount = 0
  let courses = []

  useEffect(() => {
    const fetchAllFacultyAndCourses = async () => {
      try {
        const [facultyRes, courseRes, studentRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/faculty'),
          axios.get('http://127.0.0.1:8000/course'),
          axios.get('http://127.0.0.1:8000/student'),
        ])
        setFaculty(facultyRes.data)
        setCourse(courseRes.data)
        setStudent(studentRes.data)
        console.log(faculty)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAllFacultyAndCourses()
  }, [i])

  const renderTeachesCourses = () => {
    if (faculty.length > 0 && faculty[i] && faculty[i].f_name) {
      return faculty[i].f_teaches.map((c) => {
        if (course[c - 1]) {
          return (
            <div key={c}>
              <p>
                {course[c - 1].c_name} : {course[c - 1].credits} Credits
                <div className="d-none">{courses.push(c)}</div>
              </p>
            </div>
          )
        } else {
          return null // Return null for undefined values
        }
      })
    } else {
      return <p>Loading...</p> // Show loading message while data is being fetched
    }
  }

  const renderStudentCourses = () => {
    const studentNames = student
      .filter((s) => courses.some((c) => s.s_learns.includes(c)))
      .map((s) => s.s_name)
    studentcount = studentNames.length
    return (
      <div>
        {studentNames.map((s, index) => (
          <p key={index}>{s}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>Faculty Profile Information</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 second">
                  <h5>{faculty[i]?.f_name || ''}</h5>
                  <h5>Employee id: {faculty[i]?.emp_id || ''}</h5>
                  <h5>Courses: </h5>
                  {renderTeachesCourses()}
                  <br />
                  <h5>Students: </h5>
                  {renderStudentCourses()}
                  <br />
                  <h5>Weekly Schedule: </h5>
                  <br />
                </div>

                <div className="col-md-6">
                  <div className="col-md-6">
                    {/* Profile Picture */}
                    <label htmlFor="profilePicture" className="form-label">
                      <img
                        src={dp}
                        alt="Profile Picture"
                        className="profile-img img-thumbnail"
                        data-bs-toggle="modal"
                        data-bs-target="#uploadModal"
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      {faculty[i]?.university || ''}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Number of Courses: {courses.length}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      {' '}
                      Number of students: {studentcount}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row col-lg-6">
                <div className="d-grid col-lg- d-flex align-items-center justify-content-center">
                  <button type="submit" className="btn btn-primary m-3">
                    Courses handled
                  </button>
                  <button type="submit" className="btn btn-primary m-3">
                    Teach new course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFaculty
