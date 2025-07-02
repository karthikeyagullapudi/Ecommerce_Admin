import React, { useState, useEffect } from "react";
import BrandCategoryTable from "../Components/BrandTable.jsx";
import BackEndApi from "./utils/httpclint.js";

const Brand = () => {
  const [formData, setFormData] = useState({});

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  // Fetch all categories on component mount
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

  // Fetch subcategories by categoryId
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
    if (formData.category) {
      fetchSubCategories(formData.category);
    } else {
      setSubCategories([]);
    }
  }, [formData.category]);

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const HandleClick = async (event) => {
    event.preventDefault();

    const { category, subcategory, brand } = formData;

    if (!category || !subcategory || !brand) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const payload = {
        categoryId: category, // Send category ID
        subCategoryId: subcategory, // Send subCategory name
        brand,
      };

      const response = await BackEndApi.post("/brand/add-brand", payload);
      console.log("Submitted:", response.data);
      alert("Brand added successfully!");

      setFormData({ category: "", subcategory: "", brand: "" });
    } catch (error) {
      console.error("Brand submission failed:", error);
    }
  };

  return (
    <>
      <div className="layout">
        <form onSubmit={HandleClick} className="category-form-design">
          {/* Category Selection */}
          <div className="category-container">
            <h2 className="category-heading">Select Category</h2>
            <div className="category-card">
              <select
                name="category"
                className="category-input"
                value={formData.category}
                onChange={HandleChange}
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

          {/* Subcategory Selection */}
          <div className="category-container">
            <h2 className="category-heading">Select Subcategory</h2>
            <div className="category-card">
              <select
                name="subcategory"
                className="category-input"
                value={formData.subcategory}
                onChange={HandleChange}
                required
              >
                <option value="">Select a subcategory</option>
                {subCategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.subCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Brand Input */}
          <div className="category-container">
            <h2 className="category-heading">Add Brand</h2>
            <div className="category-card">
              <input
                type="text"
                name="brand"
                className="category-input"
                placeholder="Enter brand name"
                value={formData.brand}
                onChange={HandleChange}
                required
              />
              <button type="submit" className="category-add-btn">
                Add
              </button>
            </div>
          </div>
        </form>

        <BrandCategoryTable />
      </div>
    </>
  );
};

export default Brand;
