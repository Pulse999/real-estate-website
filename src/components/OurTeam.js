import React, { useState } from "react";
import TeamMember from "./TeamMember";
import "../styles/OurTeam.css";

const OurTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to server
    console.log("Form submitted:", formData);
  };

  // Mock team member data
  const teamMembers = [
    {
      name: "John Doe",
      title: "Lead Agent",
      bio: "John has over 10 years of experience in real estate and has closed over $100 million in sales.",
      email: "johndoe@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe",
      photo: "/images/agent2.jpg",
    },
    {
      name: "Jane Smith",
      title: "Marketing Director",
      bio: "Jane specializes in marketing strategies that drive sales and enhance brand visibility.",
      email: "janesmith@example.com",
      linkedin: "https://www.linkedin.com/in/janesmith",
      photo: "/images/agent1.jpg",
    },
    {
      name: "Alice Johnson",
      title: "Sales Associate",
      bio: "Alice is passionate about helping clients find their dream homes and excels in customer service.",
      email: "mikejohnson@example.com",
      linkedin: "https://www.linkedin.com/in/mikejohnson",
      photo: "/images/agent3.jpg",
    },
  ];

  return (
    <div className="our-team">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>

      <div className="agent-signup">
        <h2>Join Our Team</h2>
        <p>
          Are you ready to make a difference in real estate? Sign up to be an
          agent!
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Why do you want to join our team?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default OurTeam;
