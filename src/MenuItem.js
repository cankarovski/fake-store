import React from "react";
import "./MenuItem.css";

export default function MenuItem(props) {
  return (
    <div className="MenuItem">
      <button>{props.children}</button>
    </div>
  );
}
