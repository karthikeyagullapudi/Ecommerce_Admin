import React, { useState, useEffect } from "react";
import SubCategoryTable from "../Components/SubCategoryTable.jsx";
import { BackEndApi } from "./utils/httpclint.js";

const SubCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  const getAllCategory = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      if (response?.status === 200) {
        setCategories(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  // Fetch subcategories for selected category (optional, only if needed)
  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await BackEndApi.get(
        `/subcategory/all-subcategories/${categoryId}`
      );
      if (response?.status === 200) {
        setSubCategories(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    const categoryObj = categories.find(
      (cat) => cat.category === selectedCategory
    );
    if (categoryObj?._id) {
      fetchSubCategories(categoryObj._id);
    }
  }, [selectedCategory, categories]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory || !subCategoryName) {
      alert("Please select a category and enter a subcategory name.");
      return;
    }

    const categoryObj = categories.find(
      (cat) => cat.category === selectedCategory
    );
    if (!categoryObj) {
      alert("Invalid category selected.");
      return;
    }

    try {
      const payload = {
        categoryId: categoryObj._id,
        subCategory: subCategoryName,
      };

      const response = await BackEndApi.post(
        "/subcategory/add-subcategory",
        payload
      );
      if (response?.status === 201 || response?.status === 200) {
        alert("Subcategory added successfully!");
        setSubCategoryName("");
        fetchSubCategories(categoryObj._id); // Refresh list
      } else {
        alert("Failed to add subcategory.");
      }
    } catch (error) {
      console.error("Error submitting subcategory:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="layout">
      <form className="category-form-design" onSubmit={handleSubmit}>
        <div className="category-container">
          <h2 className="category-heading">Select Category</h2>
          <div className="category-card">
            <select
              className="category-input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="category-container">
          <h2 className="category-heading">Add Subcategory</h2>
          <div className="category-card">
            <input
              type="text"
              className="category-input"
              placeholder="Enter subcategory name"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              required
            />
            <button type="submit" className="category-add-btn">
              Add
            </button>
          </div>
        </div>
      </form>

      <SubCategoryTable rows={subCategories} />
    </div>
  );
};

export default SubCategory;
