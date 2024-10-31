import React from "react";
import "../styles/MiniNavBar.css";
import facebookIcon from "../public/images/facebook.png"; // Path to the image
import twitterIcon from "../public/images/twitter.png";
import instagramIcon from "../public/images/instagram.png";
import linkedinIcon from "../public/images/linkedin.png";

function MiniNavBar() {
  return (
    <div className="mini-navbar">
      <div className="left">
        <a href="mailto:realestate@company.com">PulseRealestaes@gmail.com</a>
      </div>
      <div className="right">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="auth-links">
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default MiniNavBar;
