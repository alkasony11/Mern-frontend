import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Component/Dashboard";
import List from "./Pages/List";
import AddProperty from "./Pages/AddProperty";

function App() {
  return (
    <div>
      <Router>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<List />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
