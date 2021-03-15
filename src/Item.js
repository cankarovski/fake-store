import React from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="Item">
      <div className="Item-title">
        <h4>{props.itemData.title}</h4>
      </div>
      <div className="Item-image-container">
        <img src={props.itemData.image} alt={props.itemData.title}></img>
      </div>
      <h5>${props.itemData.price}</h5>
      <hr />
      <p>{props.itemData.description}</p>
    </div>
  );
}
