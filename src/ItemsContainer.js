import React, { useContext } from "react";
import { ItemsContext } from "./contexts/ItemsContext";
import "./ItemContainer.css";
import Item from "./Item";

export default function ItemsContainer() {
  const items = useContext(ItemsContext);

  return (
    <div className="ItemsContainer">
      <div className="ItemsContainer-items">
        {items.map((i) => {
          return <Item key={i.id} itemData={{ ...i }} />;
        })}
      </div>
    </div>
  );
}
