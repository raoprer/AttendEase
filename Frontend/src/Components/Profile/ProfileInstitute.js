import React from 'react'
import dp from '../../Images/profile_dp.png'

const ProfileInstitute = () => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Institute Profile Information</h2>
            </div>
            <div class="card-body">
              <h3>Username</h3>
              <form>
                <div class="row">
                  <div class="col-md-6 second">
                    <div class="mb-3">
                      <label for="degrees" class="form-label">
                        Degrees
                      </label>
                    </div>
                    <div class="mb-3">
                      <label for="Courses" class="form-label">
                        Courses
                      </label>
                    </div>
                    <div class="mb-3">
                      <label for="Faculties" class="form-label">
                        Faculties
                      </label>
                    </div>
                    <div class="mb-3">
                      <label for="Students" class="form-label">
                        Students
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
                        ></img>
                      </label>
                    </div>

                    <div class="mb-3">
                      <label for="Address" class="form-label">
                        Address
                      </label>
                      <textarea
                        class="form-control"
                        id="Address"
                        rows="3"
                        placeholder="Enter location address"
                      ></textarea>
                    </div>
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
