import React from "react";
import { Link } from "react-router-dom";
import "../assets/Listings.css";

const properties = [
  { id: 1, name: "Luxury Villa", price: "$500,000", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Modern Apartment", price: "$250,000", image: "https://via.placeholder.com/300" },
];

function Listings() {
  return (
    <div className="listings-container">
      <h1>Property Listings</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <h3 className="property-name">{property.name}</h3>
            <p className="property-price">{property.price}</p>
            <Link to={`/property/${property.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
