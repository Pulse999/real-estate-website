import React from "react";
import "../styles/PropertyCard.css";

function PropertyCard({ id, image, price, address, bedrooms, baths, area, type }) {
  return (
    <div className="property-card">
      <img src={image} alt="Property" className="property-image" />
      <div className="property-details">
        <h3>{address}</h3>
        <p>{type}</p>
        <p>{bedrooms} Beds | {baths} Baths | {area} sqft</p>
        <p className="property-price">${price.toLocaleString()}</p>
        <button>View Details</button>
      </div>
    </div>
  );
}

export default PropertyCard;
