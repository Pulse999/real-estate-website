import React from "react";
import "../styles/VideoSection.css";
import video1 from "../public/videos/realestate.mp4";

function VideoSection() {
  return (
    <div className="video-section">
      <video autoPlay loop muted className="real-estate-video">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
