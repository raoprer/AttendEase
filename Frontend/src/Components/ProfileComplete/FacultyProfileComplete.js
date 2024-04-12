import React, { useEffect, useState } from 'react'
import dp from '../../Images/profile_dp.png'
import ModalPictureUpload from '../Modal/ModalPictureUpload'
import ModalSuccess from '../Modal/ModalSuccess'
import variables from '../../Variables'
import axios from 'axios'

const FacultyProfileComplete = () => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Complete Your Profile - Faculty</h2>
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
                      <label for="Employee ID" class="form-label">
                        Employee ID
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Employee ID"
                        placeholder="Enter Employee ID"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="numDegrees" class="form-label">
                        Select Courses
                      </label>
                      <select
                        id="dropdown"
                        name="dropdown"
                        class="form-control"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
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
                  {/* Modal for uploading dp */}
                  <ModalPictureUpload title={'Upload New Profile Picture'} />
                </div>
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-primary "
                    data-bs-toggle="modal"
                    data-bs-target="#statusSuccessModal"
                  >
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

export default FacultyProfileComplete
