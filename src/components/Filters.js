import React, { useState } from "react";
import "../styles/Filters.css";

function Filters({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      minPrice: minPrice || null,
      maxPrice: maxPrice || null,
      minBeds: minBeds || null,
      maxBeds: maxBeds || null
    });
  };

  return (
    <div className="filters">
      <div className="filter-item">
        <label>PRICE</label>
        <div className="dropdowns">
          <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
            <option value="">$ Min</option>
            <option value="200000">$ 200,000</option>
            <option value="250000">$ 250,000</option>
            <option value="400000">$ 400,000</option>
          </select>
          <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
            <option value="">$ Max</option>
            <option value="5000000">$ 5,000,000</option>
          </select>
        </div>
      </div>
      <div className="filter-item">
        <label>BEDS</label>
        <div className="dropdowns">
          <select value={minBeds} onChange={(e) => setMinBeds(e.target.value)}>
            <option value="">Min</option>
            <option value="1">1</option>
          </select>
          <select value={maxBeds} onChange={(e) => setMaxBeds(e.target.value)}>
            <option value="">Max</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <button onClick={handleFilterChange} className="search-btn">Apply Filters</button>
    </div>
  );
}

export default Filters;
