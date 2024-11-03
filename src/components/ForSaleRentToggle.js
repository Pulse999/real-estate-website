import React, { useState } from "react";
import "../styles/ForSaleRentToggle.css";

function ForSaleRentToggle() {
  const [activeOption, setActiveOption] = useState("forSale");

  return (
    <div className="for-sale-rent">
      <div
        className={`option ${activeOption === "forSale" ? "active" : ""}`}
        onClick={() => setActiveOption("")}
      >
        
      </div>
      <div
        className={`option ${activeOption === "forRent" ? "active" : ""}`}
        onClick={() => setActiveOption("")}
      >
        
      </div>
    </div>
  );
}

export default ForSaleRentToggle;
