import CategoryTable from "../Components/CategoryTable";
import React, { useState } from "react";

const CategoryCard = () => {
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (category.trim() === "") return alert("Please enter a category name.");
    alert(`Category added: ${category}`);
    setCategory("");
  };

  return (
    <div className="layout">
      <div className="category-container">
        <h2 className="category-heading">Category</h2>
        <div className="category-card">
          <input
            type="text"
            placeholder="Enter category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-input"
          />
          <button onClick={handleAdd} className="category-add-btn">
            Add
          </button>
        </div>
      </div>
      <CategoryTable />
    </div>
  );
};

export default CategoryCard;
