// src/components/OpenHouses.js

import React from "react";
import "../styles/OpenHouses.css";

const openHouses = [
  {
    id: 1,
    address: "123 Main St, Cityville",
    mls: "12345678",
    price: "$300,000",
    beds: 3,
    baths: 2,
    agent: "John Doe",
    courtesy: "City Real Estate",
    image: "/images/House 1/House 1.jpg",
    description: "A beautiful modern house..."
  },
  {
    id: 2,
    address: "456 Elm St, Townsville",
    mls: "87654321",
    price: "$450,000",
    beds: 4,
    baths: 3,
    agent: "Jane Smith",
    courtesy: "Prime Realty",
    image: "/images/House 2/House 2.jpg",
    description: "A spacious contemporary home..."
  },
  {
    id: 3,
    address: "789 Oak St, Villageville",
    mls: "11223344",
    price: "$275,000",
    beds: 2,
    baths: 1,
    agent: "Sam White",
    courtesy: "Village Realty",
    image: "/images/House 3/House 3.jpg",
    description: "A charming traditional condo..."
  },
  {
    id: 4,
    address: "101 Maple St, Metropolis",
    mls: "99887766",
    price: "$600,000",
    beds: 5,
    baths: 4,
    agent: "Ella Brown",
    courtesy: "Urban Real Estate",
    image: "/images/House 4/House 4.jpg",
    description: "An exquisite luxury home..."
  },
  {
    id: 5,
    address: "202 Pine St, Ruralville",
    mls: "22334455",
    price: "$150,000",
    beds: 3,
    baths: 2,
    agent: "Jack Black",
    courtesy: "Country Homes",
    image: "/images/House 5/House 5.jpg",
    description: "A rustic countryside retreat..."
  },
];

const OpenHouses = () => {
  return (
    <div className="open-houses">
      <h1>Open Houses</h1>
      <div className="house-list">
        {openHouses.map((house) => (
          <div key={house.id} className="house-card">
            <img src={house.image} alt={house.address} className="house-image" />
            <div className="house-info">
              <h2>{house.address}</h2>
              <p>Price: {house.price}</p>
              <p>Beds: {house.beds} | Baths: {house.baths}</p>
              <p>Agent: {house.agent}</p>
              <p>Courtesy: {house.courtesy}</p>
              <p className="description">{house.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenHouses;
