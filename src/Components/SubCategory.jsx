import React from "react";

const SubCategory = () => {
  return (
    <div className="category-container">
      <h2 className="category-heading">Add Subcategory</h2>
      <div className="category-card">
        <input
          type="text"
          className="category-input"
          placeholder="Enter subcategory name"
        />
        <button className="category-add-btn">Add</button>
      </div>
    </div>
  );
};

export default SubCategory;
