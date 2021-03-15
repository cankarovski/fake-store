import React from "react";
import MenuItem from "./MenuItem";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <h4 className="Navbar-title">Fake Store</h4>
        <div className="Navbar-items">
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </div>
        <div className="Navbar-icon" onClick={props.onToggle}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
