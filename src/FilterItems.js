import React, { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "./contexts/CategoriesContext";
import useItemState from "./hooks/useItemState";
import "./FilterItems.css";

export default function FilterItems(props) {
  const { categories } = useContext(CategoriesContext);
  const { getInitItems, getCategoryItems, getCategories } = useItemState();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCategory(categories[0]);
  }, [categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCategoryItems(category, 4);
  };

  return (
    <div className="FilterItems">
      <div className="FilterItems-container">
        <form id="filterForm" onSubmit={handleSubmit}>
          <label htmlFor="category">CATEGORY:</label>
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          <button type="submit" form="filterForm" value="Submit">
            Submit
          </button>
        </form>
        <button onClick={() => getInitItems()}>Reset Filter</button>
      </div>
      <hr />
    </div>
  );
}
