import React from 'react'
import { Link } from "react-router-dom";
import "../styles/signup.scss"


function Signup() {
  return (
    <div className="signup_container">
      <div className="signup_form_container">

        <div className="right">
          <form className="form_container">
             <h1>Create Your PopX Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="userName"

              required
              className="input"

            />
            <input
              type="email"
              placeholder="Email"
              name="email"

              required
              className="input"
            />
              <input
              type="text"
              placeholder="Phone number"
              name="phone"

              required
              className="input"
            />
               <input
              type="text"
              placeholder="company name"
              name="company"

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
                 


            <button type="submit" className="green_btn">
              Register
            </button>
          </form>
        </div>
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup