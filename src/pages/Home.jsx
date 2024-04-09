import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import "../styles/home.scss"
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className='main'>

      <div className='container'>
        <div className='animate-container'>
       
          <TypeAnimation className="animate_text"
            sequence={[
              "Welcome to PopX",
              2000,
              "Welcome to PopX",
              2000,
              "Welcome to PopX",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
            style={{ color: " #6c25ff" }}
          />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta cum rerum corporis possimus ipsa amet, doloribus reiciendis nihil iste recusandae aliquam veritatis ea illo qui accusantium velit perferendis sapiente necessitatibus?</p>
        </div>
        <div className='btn-container'>
          <div>
            <Link to="/signup">
              <button type="button" className="signup_btn">
                Create Account
              </button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button type="button" className="login_btn">
                Already Register?Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home