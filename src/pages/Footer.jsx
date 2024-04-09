import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss"

export default function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div>
            © 2024 
            <Link
              to="https://www.linkedin.com/in/renu-kundan-338288208"
              target="_blank"
              className=" footer-link"
            >
         <i>     renukundan</i>
            </Link>
            . All Rights Reserved.
         

        </div>

      </div>
    </footer>
  );
}

