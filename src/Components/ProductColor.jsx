import React from "react";

const Color = () => {
  return (
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
  );
};

export default Color;
