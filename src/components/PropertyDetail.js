import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/PropertyDetail.css';

function PropertyDetail() {
  const { id } = useParams();
  const location = useLocation();
  const property = location.state || {};  // Default to an empty object if location.state is undefined

  const [isFavorite, setIsFavorite] = useState(false);

  // If property is not passed correctly, show a message to the user
  if (!property || Object.keys(property).length === 0) {
    return <p>Property not found. Please return to the listings page.</p>;
  }

  return (
    <div className="property-detail">
      {/* Image Gallery */}
      <div className="property-images">
        {property.images && property.images.length > 0 ? (
          property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property Image ${index + 1}`}
              className="property-image"
            />
          ))
        ) : (
          <p>No images available for this property.</p>
        )}
      </div>

      <div className="property-info">
        <div className="info-bar">
          <span className="property-price">{property.price}</span>
          <span className="property-address">{property.address}</span>
          <span className="favorite-star" onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? '★' : '☆'}
          </span>
        </div>

        <div className="sections">
          <div className="section information">
            <h3>Information</h3>
            <div className="info-grid">
              {property.information && Object.entries(property.information).map(([key, value]) => (
                <div key={key} className="info-item">
                  <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{value}
                </div>
              ))}
            </div>
          </div>

          <div className="section nearby-schools">
            <h3>Nearby Schools</h3>
            <ul>
              {property.nearbySchools ? (
                property.nearbySchools.map((school, idx) => <li key={idx}>{school}</li>)
              ) : (
                <li>No schools available</li>
              )}
            </ul>
          </div>

          <div className="section details">
            <h3>Details</h3>
            <div className="details-grid">
              {property.details && Object.entries(property.details).map(([key, value]) => (
                <div key={key} className="details-item">
                  <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{value}
                </div>
              ))}
            </div>
          </div>

          <div className="section description">
            <h3>Description</h3>
            <p>{property.description || "No description available."}</p>
          </div>

          <div className="section location">
            <h3>Location</h3>
            {property.location ? (
              <iframe
                src={property.location}
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Embed"
              ></iframe>
            ) : (
              <p>Location not available.</p>
            )}
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="get-in-touch">
          <h3>Get in Touch</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Surname" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Questions"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="mortgage-calculator">
          <h3>Mortgage Calculator</h3>
          <form>
            <label>Price ($)</label>
            <input type="number" placeholder="Property Price" />
            <label>Down Payment (%)</label>
            <input type="number" placeholder="Down Payment" />
            <label>Interest Rate (%)</label>
            <input type="number" placeholder="Interest Rate" />
            <label>Loan Term (Years)</label>
            <input type="number" placeholder="Loan Term" />
            <button type="button">Calculate</button>
            <div className="monthly-rate">$0.00</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
