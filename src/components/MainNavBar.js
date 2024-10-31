import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "../styles/MainNavBar.css";

function MainNavBar() {
  return (
    <nav className="main-navbar">
      <div className="logo">
        <img src="../images/real-estate-logo-design_260747-324.png" alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/selling">Selling</Link>
        </li>
        <li>
          <Link to="/listings">Listings</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="/open-houses">Open Houses</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavBar;
