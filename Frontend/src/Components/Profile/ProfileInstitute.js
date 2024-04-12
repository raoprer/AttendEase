import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dp from '../../Images/profile_dp.png'

const ProfileInstitute = (props) => {
  const [faculty, setFaculty] = useState([])
  const [degree, setDegree] = useState([])
  const [student, setStudent] = useState([])
  const [institute, setInstitute] = useState([])
  const i = props.pid.id // f_id

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [facultyRes, degreeRes, studentRes, instituteRes] =
          await Promise.all([
            axios.get('http://127.0.0.1:8000/faculty'),
            axios.get('http://127.0.0.1:8000/degree'),
            axios.get('http://127.0.0.1:8000/student'),
            axios.get('http://127.0.0.1:8000/institute'),
          ])
        setFaculty(facultyRes.data)
        setDegree(degreeRes.data)
        setStudent(studentRes.data)
        setInstitute(instituteRes.data)
        console.log(faculty)
      } catch (err) {
        console.error(err)
      }
    }
    fetchAllData()
  }, [])

  const renderOfferedDegrees = () => {
    if (institute.length > 0 && institute[i] && institute[i].has_degree) {
      return institute[i].has_degree.map((d) => {
        if (degree[d - 1]) {
          return (
            <div key={d}>
              <p>{degree[d - 1].d_name}</p>
            </div>
          )
        } else {
          return null // Return null for undefined values
        }
      })
    } else {
      return <p>No degrees offered.</p>
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>Institute Profile Information</h2>
            </div>
            <div className="card-body">
              {institute.length > 0 && institute[i] && (
                <h3>{institute[i].i_name}</h3>
              )}
              <form>
                <div className="row">
                  <div className="col-md-6 second">
                    <h5>Degrees: </h5>
                    {renderOfferedDegrees()}
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
                        ></img>
                      </label>
                    </div>

                    {institute.length > 0 &&
                      institute[i] &&
                      institute[i].address && (
                        <div class="mb-3">
                          <h5>Address: </h5>
                          <p>{institute[i].address}</p>
                        </div>
                      )}
                  </div>
                </div>
                <button type="submit" class="btn btn-primary m-1">
                  Create Degree
                </button>
                <button type="submit" class="btn btn-primary m-1">
                  Create Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInstitute
