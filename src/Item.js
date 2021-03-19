import React, { memo } from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="Item">
      <div className="Item-title">
        <h4>{props.title}</h4>
      </div>
      <div className="Item-image-container">
        <img
          src={props.image.replace("fakestoreapi", "fakestoreapi.herokuapp")}
          alt={props.title}
        ></img>
      </div>
      <h5>${props.price}</h5>
      <hr />
      <p>{props.description}</p>
    </div>
  );
}

export default memo(Item);
