import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'

const ProfileFaculty = () => {
  let i = 0
  const [faculty, setFaculty] = useState([])
  useEffect(() => {
    const fetchAllFaculty = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/faculty')
        setFaculty(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllFaculty()
  }, [])
  console.log(faculty)
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Faculty Profile Information</h2>
            </div>
            <div class="card-body">
              <h3>{faculty[i].f_name}</h3>
              <div class="row">
                <div class="col-md-6 second">
                  <div class="mb-3">
                    <label for="courses" class="form-label">
                      Courses
                    </label>
                  </div>
                  <div class="mb-3">
                    <label for="Courses" class="form-label">
                      Students
                    </label>
                  </div>
                  <div class="mb-3">
                    <label for="Faculties" class="form-label">
                      Weekly Schedule
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="col-md-6">
                    {/* Profile Picture */}
                    <label for="profilePicture" class="form-label">
                      <img
                        src={dp}
                        alt="Profile Picture"
                        class="profile-img img-thumbnail"
                        data-bs-toggle="modal"
                        data-bs-target="#uploadModal"
                      />
                    </label>
                  </div>

                  <div class="mb-3">
                    <label class="form-label"> Institute name </label>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">
                      University Number of courses
                    </label>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"> Number of Courses</label>
                  </div>
                  <div class="mb-3">
                    <label class="form-label"> Number of students</label>
                  </div>
                </div>
              </div>

              <div class="row col-lg-6">
                <div class="d-grid col-lg- d-flex align-items-center justify-content-center">
                  <button type="submit" class="btn btn-primary m-3">
                    Courses handled
                  </button>
                  <button type="submit" class="btn btn-primary m-3">
                    Teach new course
                  </button>
                </div>
              </div>

              <div class="row col-lg-6">
                <div class="d-grid col-lg- d-flex align-items-center justify-content-center">
                  <button type="submit" class="btn btn-primary m-3">
                    Message
                  </button>
                  <button type="submit" class="btn btn-primary m-3">
                    Broadcast
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
