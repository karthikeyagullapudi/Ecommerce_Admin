import React, { useState } from "react";
import SubCategoryTable from "../Components/SubCategoryTable.jsx";

const SubCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !subCategoryName) {
      alert("Please select a category and enter a subcategory name.");
      return;
    }
    console.log("Category:", selectedCategory);
    console.log("Subcategory:", subCategoryName);
    // Call your API logic here
    setSubCategoryName("");
  };

  return (
    <div className="layout">
      <form className="category-form-design" onSubmit={handleSubmit}>
        {/* Category Selection */}
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
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>

        {/* Subcategory Input */}
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

      {/* SubCategory Table Display */}
      <SubCategoryTable />
    </div>
  );
};

export default SubCategory;
