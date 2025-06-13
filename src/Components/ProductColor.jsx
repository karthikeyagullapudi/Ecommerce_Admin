import React from "react";
import ColorsCategoryTable from "../Components/ProductColorTable.jsx"

const Color = () => {
  return (
    <div>
      <div className="category-container">
        <h2 className="category-heading">Add Color</h2>
        <div className="category-card">
          <input
            type="text"
            className="category-input"
            placeholder="Enter color name"
          />
          <button className="category-add-btn">Add</button>
        </div>
      </div>
      <ColorsCategoryTable />
    </div>
  );
};

export default Color;
