import React from 'react'
import ModalPictureUpload from '../Modal/ModalPictureUpload'
import ModalSuccess from '../Modal/ModalSuccess'
import dp from '../../Images/profile_dp.png'

const StudentProfileComplete = () => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Complete Your Student Profile Information</h2>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-md-6 second">
                    <div class="mb-3">
                      <label for="profileName" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="profileName"
                        placeholder="Enter your name"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="universityName" class="form-label">
                        University Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="universityName"
                        placeholder="Enter university name"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="registrationNumber" class="form-label">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="registrationNumber"
                        placeholder="Enter registration number"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="selectCourses" class="form-label">
                        Select Your Courses
                      </label>
                      <select class="form-select" id="selectCourses">
                        <option selected>Select courses</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                        {/* Add more courses here */}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="degree" class="form-label">
                        Degree
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="degree"
                        placeholder="Enter your degree"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="semester" class="form-label">
                        Semester
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="semester"
                        placeholder="Enter your semester"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="numCourses" class="form-label">
                        Number of Courses
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="numCourses"
                        placeholder="Enter number of courses"
                      ></input>
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/* Profile Picture  */}
                    <label for="profilePicture" class="form-label  mb-3">
                      <img
                        src={dp}
                        alt="Profile Picture"
                        class="profile-img img-thumbnail"
                        data-bs-toggle="modal"
                        data-bs-target="#uploadModal"
                      ></img>
                    </label>

                    {/* Modal */}
                    <ModalPictureUpload title={'Upload New Profile Picture'} />

                    <h4>Upload 5 Pictures</h4>
                    <div class="mb-3">
                      <label for="profilePicture1" class="form-label">
                        Upload Picture 1
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="profilePicture1"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="profilePicture2" class="form-label">
                        Upload Picture 2
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="profilePicture2"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="profilePicture3" class="form-label">
                        Upload Picture 3
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="profilePicture3"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="profilePicture4" class="form-label">
                        Upload Picture 4
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="profilePicture4"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="profilePicture5" class="form-label">
                        Upload Picture 5
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="profilePicture5"
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">
                    Update
                  </button>
                  {/* Modal for showing the Success Status */}
                  <ModalSuccess
                    text={'You have successfully registered and logged in.'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfileComplete
