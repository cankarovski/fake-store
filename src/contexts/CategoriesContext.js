import React, { createContext, useReducer } from "react";
import CategoriesReducer from "../reducers/CategoriesReducer";

export const CategoriesContext = createContext();

export function CategoriesProvider(props) {
  const [categories, dispatchCategories] = useReducer(CategoriesReducer, []);

  return (
    <CategoriesContext.Provider value={{ categories, dispatchCategories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
