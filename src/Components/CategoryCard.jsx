import React, { useState } from "react";
import CategoryTable from "../Components/CategoryTable";
import BackEndApi from "./utils/httpclint";

const CategoryCard = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.trim() === "") {
      alert("Please enter a category name.");
      return;
    }

    addCategory();
  };

  const addCategory = async () => {
    try {
      const response = await BackEndApi.post("/category/add-category", {
        category: category.trim(),
      });

      if (response.status === 201 || response.status === 200) {
        alert("Category added successfully!");
        setCategory("");
      }
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message;

      if (status === 409) {
        alert("This category already exists.");
      } else if (status === 422) {
        alert(message || "Validation failed. Please check your input.");
      } else {
        alert("Something went wrong. Please try again.");
      }

      console.log("Category error ====", error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default CategoryCard;
