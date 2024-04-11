import React from 'react'
import ModalPictureUpload from '../Modal/ModalPictureUpload'
import ModalSuccess from '../Modal/ModalSuccess'
import dp from '../../Images/profile_dp.png'

const InstituteProfileComplete = () => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Complete Your Institute Profile Information</h2>
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
                      />
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
                      />
                    </div>
                    <div class="mb-3">
                      <label for="numFaculties" class="form-label">
                        Number of Faculties
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="numFaculties"
                        placeholder="Enter number of faculties"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="numStudents" class="form-label">
                        Number of Students
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="numStudents"
                        placeholder="Enter number of students"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="numDegrees" class="form-label">
                        Number of Degrees
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="numDegrees"
                        placeholder="Enter number of degrees"
                      />
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

                    <div class="mb-3">
                      <label for="locationAddress" class="form-label">
                        Address
                      </label>
                      <textarea
                        class="form-control"
                        id="locationAddress"
                        rows="3"
                        placeholder="Enter location address"
                      ></textarea>
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

export default InstituteProfileComplete
