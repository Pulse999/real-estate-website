import React, { useState } from "react";
import "../styles/ForSaleRentToggle.css";

function ForSaleRentToggle() {
  const [activeOption, setActiveOption] = useState("forSale");

  return (
    <div className="for-sale-rent">
      <div
        className={`option ${activeOption === "forSale" ? "active" : ""}`}
        onClick={() => setActiveOption("forSale")}
      >
        FOR SALE
      </div>
      <div
        className={`option ${activeOption === "forRent" ? "active" : ""}`}
        onClick={() => setActiveOption("forRent")}
      >
        FOR RENT
      </div>
    </div>
  );
}

export default ForSaleRentToggle;
