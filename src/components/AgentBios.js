import React from "react";
import "../styles/AgentBios.css";

function AgentBios() {
  const agents = [
    {
      name: "Jane Smith",
      bio: "Real estate expert in luxury homes.",
      contact: "jane@realestate.com",
      phone: "(123) 456-7890",
      social: {
        facebook: "/images/icons8-facebook-50.png",
        twitter: "/images/icons8-twitter-30.png",
        linkedin: "/images/icons8-linkedin-50.png",
        instagram: "/images/icons8-instagram-50.png",
      },
    },
    {
      name: "John Doe",
      bio: "Specialist in commercial real estate.",
      contact: "john@realestate.com",
      phone: "(987) 654-3210",
      social: {
        facebook: "/images/icons8-facebook-50.png",
        twitter: "/images/icons8-twitter-30.png",
        linkedin: "/images/icons8-linkedin-50.png",
        instagram: "/images/icons8-instagram-50.png",
      },
    },
    {
      name: "Alice Johnson",
      bio: "Experienced in residential properties.",
      contact: "alice@realestate.com",
      phone: "(555) 123-4567",
      social: {
        facebook: "/images/icons8-facebook-50.png",
        twitter: "/images/icons8-twitter-30.png",
        linkedin: "/images/icons8-linkedin-50.png",
        instagram: "/images/icons8-instagram-50.png",
      },
    },
  ];

  return (
    <div className="agent-bios">
      <h2>Our Best Agents</h2>
      <div className="agent-list">
        {agents.map((agent, index) => (
          <div key={index} className="agent-item">
            <img
              src={`/images/agent${index + 1}.jpg`}  // Dynamic image path based on index
              alt={`Agent ${agent.name}`}
              className="agent-img"
            />
            <div className="agent-info">
              <p><strong>{agent.name}</strong></p>
              <p>{agent.bio}</p>
              <p>Contact: {agent.contact}</p>
              <p>Phone: {agent.phone}</p>
              <div className="agent-social">
                <a href="#" target="_blank">
                  <img src={agent.social.facebook} alt="Facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src={agent.social.twitter} alt="Twitter" />
                </a>
                <a href="#" target="_blank">
                  <img src={agent.social.linkedin} alt="LinkedIn" />
                </a>
                <a href="#" target="_blank">
                  <img src={agent.social.instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentBios;
