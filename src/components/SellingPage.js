import React, { useState } from "react";
import "../styles/SellingPage.css";

function SellingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    propertyDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property submitted successfully! Our team will reach out soon.");
    setForm({ name: "", email: "", propertyDetails: "" });
  };

  return (
    <div className="selling-page">
      <section className="hero-section">
        <h1>Sell Your Property</h1>
        <p>Connect with our team to sell your property at the best price.</p>
      </section>

      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="listing-cards">
          <div className="card">Property 1</div>
          <div className="card">Property 2</div>
          <div className="card">Property 3</div>
        </div>
      </section>

      <section className="property-form-section">
        <h2>Submit Your Property</h2>
        <form className="property-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Property Details:
            <textarea
              name="propertyDetails"
              value={form.propertyDetails}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit Property</button>
        </form>
      </section>

      <section className="cta-section">
        <h2>Ready to Sell?</h2>
        <p>Contact our team today to get started with your property listing!</p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
}

export default SellingPage;
