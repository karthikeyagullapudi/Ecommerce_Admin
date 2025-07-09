import React, { useState, useEffect } from "react";
import CategoryTable from "../Components/CategoryTable";
import BackEndApi from "./utils/httpclint";
import { IoSearchSharp } from "react-icons/io5";

const CategoryCard = () => {
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      setCategoryList(response.data.data); // ✅ Corrected line
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category.trim() === "") {
      alert("Please enter a category name.");
      return;
    }

    try {
      const response = await BackEndApi.post("/category/add-category", {
        category: category.trim(), // ✅ Corrected here
      });

      if (response.status === 201 || response.status === 200) {
        alert("Category added successfully!");
        setCategory("");
        fetchCategories(); // Refresh table
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

      console.log("Add error:", error);
    }
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit} className="category-form-design">
        <div className="Search-Bar">
          <div className="SearchBar">
            <IoSearchSharp className="IoSearchSharp" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
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

      <CategoryTable categories={categoryList} />
    </div>
  );
};

export default CategoryCard;
