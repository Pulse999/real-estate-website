import React from "react";
import "../styles/MapSection.css"; // Import the CSS for styling

function MapSection() {
  return (
    <section className="map-section">
      <h2>Find Us Here</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Headquarters Location"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
