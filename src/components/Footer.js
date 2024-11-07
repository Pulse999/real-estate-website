import React from "react";
import "../styles/Footer.css"; // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/images/real-estate-logo-design_260747-324.avif" alt="Company Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} Real Estate Co. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/selling">Selling</a>
          <a href="/listings">Listings</a>
          <a href="/team">Our Team</a>
          <a href="/open-houses">Open Houses</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="company-description">
          Real Estate Co., serving clients for over 20 years with trust and integrity.
        </p>
      </div>

      <div className="footer-right">
        <h4>Contact the CEO</h4>
        <div className="ceo-info">
          <img src="/images/WhatsApp Image 2024-02-11 at 14.46.10_7817e7ff.jpg" alt="CEO" className="agent-mini-photo" />
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@realestateco.com</p>
          <div className="social-icons">
            <img src="/images/icons8-facebook-50.png" alt="Facebook" />
            <img src="/images/icons8-twitter-30.png" alt="Twitter" />
            <img src="/images/icons8-linkedin-50.png" alt="LinkedIn" />
            <img src="/images/icons8-instagram-50.png" alt="Instagram" />
          </div>
        </div>
      </div>

      <div className="footer-agents">
        <h4>Our Agents</h4>
        {[
          { name: "Jane Smith", phone: "(123) 555-7891", email: "jane@realestate.com", photo: "/images/agent1.jpg" },
          { name: "John Doe", phone: "(123) 555-7892", email: "john@realestate.com", photo: "/images/agent2.jpg" },
          { name: "Alice Johnson", phone: "(123) 555-7893", email: "alice@realestate.com", photo: "/images/agent3.jpg" }
        ].map((agent, index) => (
          <div key={index} className="agent-item">
            <img src={agent.photo} alt={`Agent ${agent.name}`} className="agent-mini-photo" />
            <p>{agent.name}: {agent.phone} | {agent.email}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
