import React from "react";
import { Link } from "react-router-dom";
import Admin from "../Component/Admin";
import "../assets/Dashboard.css";

function Dashboard(props) {
  return (
    <header className="dashboard-header">
      {props.role === "admin" ? <Admin /> : null}
      <div className="logo">logo</div>
      <nav className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/add-property">
          Add Property
        </Link>
        <Link className="nav-link" to="/listings">
          Property Listings
        </Link>
      </nav>
    </header>
  );
}

export default Dashboard;
