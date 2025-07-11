import React, { useState, useEffect } from "react";
import BrandCategoryTable from "../Components/BrandTable.jsx";
import BackEndApi from "./utils/httpclint.js";
import { IoSearchSharp } from "react-icons/io5";

const Brand = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]); // 🆕 brand list state

  const fetchCategories = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      if (response.status === 200) {
        setCategories(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await BackEndApi.get(`/subcategory/get-subcategory/${categoryId}`);
      if (response.status === 200) {
        setSubCategories(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await BackEndApi.get("/brand/all-brands");
      if (response.status === 200) {
        setBrands(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch brands", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands(); // 🆕 load brands initially
  }, []);

  useEffect(() => {
    if (formData.category) {
      fetchSubCategories(formData.category);
    } else {
      setSubCategories([]);
    }
  }, [formData.category]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { category, subcategory, brand } = formData;

    if (!category || !subcategory || !brand) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const payload = {
        categoryId: category,
        subCategoryId: subcategory,
        brand: brand.trim(),
      };

      const response = await BackEndApi.post("/brand/add-brand", payload);
      if (response.status === 201 || response.status === 200) {
        alert("Brand added successfully!");
        setFormData({ category: "", subcategory: "", brand: "" });
        fetchBrands(); // ✅ Refresh the table
      }
    } catch (error) {
      alert("Failed to add brand.");
      console.error("Brand submission failed:", error);
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
        {/* Category Selection */}
        <div className="category-container">
          <h2 className="category-heading">Select Category</h2>
          <div className="category-card">
            <select
              name="category"
              className="selectCate"
              value={formData.category || ""}
              onChange={handleChange}
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
              className="selectCate"
              value={formData.subcategory || ""}
              onChange={handleChange}
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
              value={formData.brand || ""}
              onChange={handleChange}
              required
            />
            <button type="submit" className="category-add-btn">
              Add
            </button>
          </div>
        </div>
      </form>

      <BrandCategoryTable
        categories={categories}
        subCategories={subCategories}
        brands={brands} />
    </div>
  );
};

export default Brand;
