import React from "react";
import "../styles/AboutSection.css"; // Import the CSS for styling

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img
          src="/images/Me.jpg" // Replace with your actual photo file name
          alt="Your Name"
          className="about-photo"
        />
        <div className="about-text">
          <h2>Welcome to Pulse Real Estate Agency</h2>
          <p>
            Established with a vision to redefine real estate, our agency has
            been connecting clients to their dream properties with dedication
            and integrity. We believe in personalized service, catering to the
            unique needs of every client.
          </p>
          <p>
            Over the years, we’ve developed a reputation for trust and excellence,
            building a legacy in the market that speaks to our commitment. Our
            future-focused team works tirelessly to stay ahead of industry trends,
            ensuring our clients have access to the best properties and insights.
          </p>
          <p>
            Our plans are to continue expanding, offering new opportunities, and
            making property ownership and investment as seamless as possible for
            all our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
