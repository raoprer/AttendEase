import React from 'react'

const LoginContent = () => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Login</h3>
              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                  ></input>
                </div>

                <div class="mb-3">
                  <label class="form-label">Select Role</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="role"
                      id="institute"
                      value="institute"
                    ></input>
                    <label class="form-check-label" for="institute">
                      Institute
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="role"
                      id="faculty"
                      value="faculty"
                    ></input>
                    <label class="form-check-label" for="faculty">
                      Faculty
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="role"
                      id="student"
                      value="student"
                    ></input>
                    <label class="form-check-label" for="student">
                      Student
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-block ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginContent
