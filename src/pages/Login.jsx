import React from 'react'
import { Link } from "react-router-dom";
import "../styles/login.scss"

function Login() {
  return (
    <div className="login_container">
    <div className="login_form_container">
      <div className="login_left">
        <form className="form_container">
          <h1>Login to Your PopX Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
         
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="input"
          />
         
          <button type="submit" className="blue_btn">
            Log In
          </button>
        </form>
      </div>
      <div className="login_right">
        <h1>New Here ?</h1>
        <Link to="/signup">
          <button type="button" className="white_btn">
            Register
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Login