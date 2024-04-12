import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'
import Modal from '../Modal/Modal'

const ProfileStudent = (props) => {
  const [faculty, setFaculty] = useState([])
  const [course, setCourse] = useState([])
  const [student, setStudent] = useState([])
  const [schedule, setSchedule] = useState([])
  const [learns, setLearns] = useState([])
  const i = props.pid.id // s_id
  let avg = 0
  let courses = []

  useEffect(() => {
    const fetchAllFacultyAndCourses = async () => {
      try {
        const [facultyRes, courseRes, studentRes, scheduleRes, learnsRes] =
          await Promise.all([
            axios.get('http://127.0.0.1:8000/faculty'),
            axios.get('http://127.0.0.1:8000/course'),
            axios.get('http://127.0.0.1:8000/student'),
            axios.get('http://127.0.0.1:8000/schedule'),
            axios.get('http://127.0.0.1:8000/learns'),
          ])
        setFaculty(facultyRes.data)
        setCourse(courseRes.data)
        setStudent(studentRes.data)
        setSchedule(scheduleRes.data)
        setLearns(learnsRes.data)
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

  const getCourseAttendanceString = () => {
    if (!student[i] || !student[i].s_learns) return ''

    const attendanceString = student[i].s_learns
      .map((c) => {
        let cAttendance = 0
        const courseName = course[c - 1]?.c_name || 'Unknown Course'
        const noclasses = course[c - 1].no_classes
        // alert(i)
        learns.forEach((entry) => {
          console.log(entry)
          //   alert(+i + 1 + ' ' + c)
          if (entry.s_id === +i + 1 && entry.c_id === c) {
            cAttendance += entry.attendance
          }
        })
        return courseName + ' : ' + cAttendance + ' out of ' + noclasses
      })
      .join(' | ')

    return attendanceString
  }

  const getAverageAttendance = () => {
    if (!student[i] || !student[i].s_learns) return 0

    const totalAttendance = student[i].s_learns.reduce((total, c) => {
      const attendance =
        learns.find(
          (entry) => entry.s_id === student[i].s_id && entry.c_id === c
        )?.attendance || 0
      return total + attendance
    }, 0)
    // alert(totalAttendance)

    let totClasses = 0

    course.forEach((c) => {
      totClasses += c.no_classes
    })

    // Avoid division by zero
    if (totClasses === 0) return 0

    const averageAttendance = (totalAttendance * 100) / totClasses

    // Return the average attendance rounded to two decimal places
    return Math.round(averageAttendance * 100) / 100
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
                    <h5>Average Attendance: </h5>
                    {getAverageAttendance()}%
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Attendence Status
              </button>
              {/* Modal */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <Modal
                  title={'Attendence Status'}
                  content={getCourseAttendanceString()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileStudent
