import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/header.scss"

function Header() {
    const navbar = [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Profile",
          to: "/profile",
        },
        {
          name: "Signup",
          to: "/signup"
      },
        {
          name: "Login",
          to: "/login",
        },
       
      ];
  return (
    <header>
        <div className='main'>
         <ul>
              {navbar.map((item, index) => (
                <li key={index} className="item">
                  <NavLink
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
    </div>
    </header>
  )
}

export default Header