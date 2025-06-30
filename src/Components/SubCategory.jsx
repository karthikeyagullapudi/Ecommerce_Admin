import React, { useState, useEffect } from "react";
import SubCategoryTable from "../Components/SubCategoryTable.jsx";
import BackEndApi from "./utils/httpclint.js";

const SubCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);

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

  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await BackEndApi.get(
        `/subcategory/get-subcategory/${categoryId}`
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
    if (selectedCategory) {
      fetchSubCategories(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory || !subCategoryName) {
      alert("Please select a category and enter a subcategory name.");
      return;
    }

    try {
      const payload = {
        categoryId: selectedCategory,
        subCategory: subCategoryName,
      };

      const response = await BackEndApi.post(
        "/subcategory/add-subcategory",
        payload
      );

      if (response?.status === 201 || response?.status === 200) {
        alert("Subcategory added successfully!");
        setSubCategoryName("");
        fetchSubCategories(selectedCategory);
      } else {
        alert("Failed to add subcategory.");
      }
    } catch (error) {
      console.error("Error adding subcategory:", error);
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
                <option key={cat._id} value={cat._id}>
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
