import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Listings.css";

const List = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    },[properties]);

    const fetchProperties = async () => {
        try {
            const response = await axios.get("https://mern2-g07c.onrender.com/iteminsert");
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    return (
        <div>
            <h2>Property Listings</h2>
            {properties.length === 0 ? (
                <p>No properties found.</p>
            ) : (
                properties.map((property, index) => (
                    <div key={index} className="card">
                        <h3>{property.title}</h3>
                        <p>{property.description}</p>
                        <p><strong>Location:</strong> {property.location}</p>
                        <p><strong>Price:</strong> ${property.price}</p>
                    </div>
                ))
            )} 
        </div>
    );
};

export default List;
