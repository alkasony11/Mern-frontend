import "../assets/AddProperty.css";
import { useState } from "react";
import axios from "axios";

function AddProperty() {

  //hooks
  //useState
  const [property,setProperty] = useState({
    title: "",
    description: "",
    location: "",
    price: ""
  });

  const handleChange = (e) => {
    setProperty({...property,[e.target.name]:e.target.value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mern2-g07c.onrender.com/iteminsert",property)
      alert("Property added successfully")
      setProperty({
        title: "",
        description: "",
        location: "",
        price: ""
      })
    } catch (error) {

      alert("Property not added")
    }
  }
  //useEffect
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={property.title} onChange={handleChange} placeholder="Title" required/>
        <textarea name="description" value={property.description} onChange={handleChange} placeholder="Description" required></textarea>
        <input type="text" name="location" value={property.location} onChange={handleChange} placeholder="Location" required/>
          <input type="text" name="price" value={property.price} onChange={handleChange} placeholder="Price" required/>
            <button type="submit">Add Property</button>
          </form>
)}
          export default AddProperty;
