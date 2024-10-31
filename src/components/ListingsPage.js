import React, { useState, useEffect } from "react";
import "../styles/ListingsPage.css";
import PropertyCard from "./PropertyCard"; // Component for individual listings
import listingsData from "../data/listingsData"; // Mock data for listings

function ListingsPage() {
  const [listings, setListings] = useState(listingsData);
  const [filters, setFilters] = useState({ type: "all", price: "all" });
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    let filteredListings = listingsData;

    if (filters.type !== "all") {
      filteredListings = filteredListings.filter(
        (listing) => listing.type === filters.type
      );
    }
    if (filters.price !== "all") {
      filteredListings = filteredListings.filter(
        (listing) => listing.priceCategory === filters.price
      );
    }
    if (sortOrder !== "default") {
      filteredListings.sort((a, b) =>
        sortOrder === "priceAsc" ? a.price - b.price : b.price - a.price
      );
    }
    setListings(filteredListings);
  }, [filters, sortOrder]);

  return (
    <div className="listings-page">
      <h1>Property Listings</h1>
      <section className="filters-section">
        <select
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="all">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="all">All Prices</option>
          <option value="low">Low to Mid</option>
          <option value="high">High</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </section>
      <div className="listings-grid">
        {listings.map((listing) => (
          <PropertyCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}



export default ListingsPage;
