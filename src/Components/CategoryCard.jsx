import React, { useState } from "react";
import CategoryTable from "../Components/CategoryTable";

const CategoryCard = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.trim() === "") {
      alert("Please enter a category name.");
      return;
    }

    alert(`Category added: ${category}`);
    // You can call your API here
    setCategory("");
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit} className="category-form-design">
        <h2 className="category-heading">Add Category</h2>
        <div className="category-card">
          <input
            type="text"
            placeholder="Enter category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-input"
            required
          />
          <button type="submit" className="category-add-btn">
            Add
          </button>
        </div>
      </form>

      <CategoryTable />
    </div>
  );
};

export default CategoryCard;
