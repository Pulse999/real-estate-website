import React from "react";
import "../styles/Filters.css";

function Filters() {
  return (
    <div className="filters">
      <div className="filter-item">
        <label>PRICE</label>
        <div className="dropdowns">
          <select>
            <option>$ Min</option>
            <option>$ 200 000</option>
            <option>$ 250 000</option>
            <option>$ 400 000</option>
            <option>$ 800 000</option>
            <option>$ 850 000</option>
            <option>$ 950 000</option>
          </select>
          <select>
            <option>$ Max</option>
            <option>$ 5 000 000</option>

          </select>
        </div>
      </div>
      <div className="filter-item">
        <label>BEDS</label>
        <div className="dropdowns">
          <select>
            <option>Min</option>
            <option>1</option>
          </select>
          <select>
            <option>Max</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
