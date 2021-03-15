import React, { createContext, useReducer } from "react";
import ItemsReducer from "../reducers/ItemsReducer";

export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemsProvider(props) {
  const [items, dispatchItems] = useReducer(ItemsReducer, []);

  return (
    <ItemsContext.Provider value={items}>
      <DispatchContext.Provider value={dispatchItems}>
        {props.children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}
