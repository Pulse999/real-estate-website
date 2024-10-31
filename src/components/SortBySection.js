import React from 'react';
import '../styles/SortBySection.css';

function SortBySection() {
  return (
    <div className="sort-by-section">
      <div className="sort-item">
        <label>SORT BY</label>
        <select><option>Days on the Market</option></select>
      </div>
      <div className="sort-item">
        <label>SORT DIR</label>
        <select><option>Ascending</option></select>
      </div>
      <div className="sort-item">
        <label>RESULTS</label>
        <select><option>Optional Number</option></select>
      </div>
    </div>
  );
}

export default SortBySection;
