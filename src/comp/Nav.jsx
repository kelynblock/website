import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div className="nav_container">
        <div className="logo">
          <h2>KB</h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/work" className="link">
                Work
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="=btn">
          <Link to="/contact" className="btnlink">
            Lets Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
