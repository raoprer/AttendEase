import React from 'react'

const Login = () => {
  return (
    <div
      className="container-fluid"
      style={{
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      <form
        action=""
        style={{
          margin: '5rem 9rem',
          padding: '5rem 1rem',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: '2rem',
        }}
      >
        <label htmlFor="username" style={{ margin: '0.5rem' }}>
          Username
        </label>
        <input type="text" />
        <br />
        <label htmlFor="password" style={{ margin: '0.5rem' }}>
          Password
        </label>
        <input type="password" />
        <br />
        <input
          type="radio"
          name="selection"
          id="login_type"
          value="institute"
        />
        <label htmlFor="login_type" style={{ margin: '0.5rem' }}>
          Institute
        </label>
        <br />
        <input type="radio" name="selection" id="login_type" value="faculty" />
        <label htmlFor="login_type" style={{ margin: '0.5rem' }}>
          Faculty
        </label>
        <br />
        <input type="radio" name="selection" id="login_type" value="student" />
        <label htmlFor="login_type" style={{ margin: '0.5rem' }}>
          Student
        </label>
        <br />
        <button className="btn btn-secondary" style={{ margin: '0.5rem' }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
