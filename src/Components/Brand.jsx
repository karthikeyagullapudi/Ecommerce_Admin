import React from "react";

const Brand = () => {
  return (
    <div className="category-container">
      <h2 className="category-heading">Add Brand</h2>
      <div className="category-card">
        <input
          type="text"
          className="category-input"
          placeholder="Enter brand name"
        />
        <button className="category-add-btn">Add</button>
      </div>
    </div>
  );
};

export default Brand;
