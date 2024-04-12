import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'

const ProfileStudent = (props) => {
  const [faculty, setFaculty] = useState([])
  const [course, setCourse] = useState([])
  const [student, setStudent] = useState([])
  const [schedule, setSchedule] = useState([])
  const i = props.pid.id // s_id
  let courses = []

  useEffect(() => {
    const fetchAllFacultyAndCourses = async () => {
      try {
        const [facultyRes, courseRes, studentRes, scheduleRes] =
          await Promise.all([
            axios.get('http://127.0.0.1:8000/faculty'),
            axios.get('http://127.0.0.1:8000/course'),
            axios.get('http://127.0.0.1:8000/student'),
            axios.get('http://127.0.0.1:8000/schedule'),
          ])
        setFaculty(facultyRes.data)
        setCourse(courseRes.data)
        setStudent(studentRes.data)
        setSchedule(scheduleRes.data)
        // console.log(faculty)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAllFacultyAndCourses()
  }, [i])

  const renderStudentCourses = () => {
    if (student.length > 0 && student[i] && student[i].s_name) {
      return student[i].s_learns.map((c) => {
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

  const displaySchedules = () => {
    // Initialize an array to hold JSX elements representing schedules
    const scheduleElements = []

    // Iterate over each course
    courses.forEach((c) => {
      // Filter the schedule to find matching entries for the current course
      const matchingSchedules = schedule.filter((entry) => entry.c_id === c)
      scheduleElements.push(
        <div>
          <h5>{course[c - 1].c_name}</h5>
        </div>
      )
      // Map the matching schedules to create JSX elements
      matchingSchedules.forEach((m) => {
        // Create a JSX element for each schedule entry
        const scheduleElement = (
          <div key={m.sch_id}>
            <p>
              {m.day} : {m.time}
            </p>
          </div>
        )
        // Push the JSX element to the array
        scheduleElements.push(scheduleElement)
      })
    })

    // Return the array of JSX elements
    return scheduleElements
  }

  // Add a conditional check to prevent accessing undefined properties
  if (student.length === 0 || !student[i] || !student[i].s_name) {
    return <p>No student found.</p>
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>Student Profile Information</h2>
            </div>
            <div className="card-body">
              <h3>{student[i].s_name}</h3>
              <h4>{student[i].reg_no}</h4>
              <div className="row">
                <div className="col-md-6 second">
                  <div className="mb-3">
                    <h5>Courses: </h5>
                    {renderStudentCourses()}
                  </div>

                  <div className="mb-3">
                    <h5>Schedule</h5>
                    {displaySchedules()}
                  </div>
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
                    <h5>University: </h5>
                    <p>{student[i].university}</p>
                  </div>
                  <div className="mb-3">
                    <h5>Degree: </h5>
                    <p>{student[i].degree}</p>
                  </div>
                  <div className="mb-3">
                    <h5>Number of Courses: </h5>
                    <p>{courses.length}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Average Attendance</label>
                  </div>
                </div>
              </div>
              <div className="row col-lg-6">
                <div className="d-grid d-flex align-items-center justify-content-center">
                  <button type="submit" className="btn btn-primary m-3">
                    Courses Registered
                  </button>
                  <button type="submit" className="btn btn-primary m-3">
                    Learn New Course
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

export default ProfileStudent
