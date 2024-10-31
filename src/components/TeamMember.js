// src/components/TeamMember.js

import React from 'react';
import '../styles/TeamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.photo} alt={member.name} className="member-photo" />
      <h3 className="member-name">{member.name}</h3>
      <p className="member-title">{member.title}</p>
      <p className="member-bio">{member.bio}</p>
      <div className="member-contact">
        <a href={`mailto:${member.email}`} className="contact-email">Email</a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-linkedin">LinkedIn</a>
      </div>
    </div>
  );
};

export default TeamMember;
