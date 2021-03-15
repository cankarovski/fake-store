import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu(props) {
  if (props.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <div className={`Menu ${props.isOpen ? "MenuFadeIn" : "MenuFadeOut"}`}>
      <div className="Menu-close" onClick={() => props.toggleOpen(false)}>
        <h5>CLOSE</h5>
        <i className="fas fa-times"></i>
      </div>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </div>
  );
}
export default Menu;
