import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'
import Modal from '../Modal/Modal'

const ProfileFaculty = (props) => {
  const [faculty, setFaculty] = useState([])
  const [course, setCourse] = useState([])
  const [student, setStudent] = useState([])
  const [schedule, setSchedule] = useState([])
  const i = props.pid.id //f_id
  //   let s = ''
  console.log(i)
  let studentcount = 0
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
        console.log(faculty)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAllFacultyAndCourses()
  }, [i])

  const handleButtonClick = () => {
    axios
      .post('/run-script/')
      .then((response) => {
        console.log(response.data)
        alert('Success')
      })
      .catch((error) => {
        console.error(error)
        alert('Error')
      })
  }

  const renderTeachesCourses = () => {
    if (faculty.length > 0 && faculty[i] && faculty[i].f_name) {
      return faculty[i].f_teaches.map((c) => {
        if (course[c - 1]) {
          return (
            <div key={c}>
              <p>
                {course[c - 1].c_name} : {course[c - 1].credits} Credits{' '}
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={handleButtonClick}
                >
                  Take Attedance
                </button>
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

  const renderTeachesNoOfClasses = () => {
    let s = ''
    if (faculty.length > 0 && faculty[i] && faculty[i].f_name) {
      // Use map instead of forEach to create an array of strings
      const coursesHandled = faculty[i].f_teaches.map((c) => {
        if (course[c - 1]) {
          return `${course[c - 1].c_name}: ${course[c - 1].no_classes} |`
        }
        return '' // Return empty string for undefined values
      })

      // Join the array of strings with a line break
      s = coursesHandled.join('\n')
    } else {
      s = 'Loading ...' // Show loading message while data is being fetched
    }
    return s // Return the string
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
                  <h5>Schedule: </h5>
                  {displaySchedules()}
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
                      Number of students: {studentcount}
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Number of Classes Taken
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
                  content={renderTeachesNoOfClasses()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFaculty
