import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you have a question about properties, services, or anything else, our team is here to help.</p>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@realestate.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main St, Cityville, State, 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
