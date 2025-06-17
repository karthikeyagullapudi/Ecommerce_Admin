import React, { useState } from "react";
import BrandCategoryTable from "../Components/BrandTable.jsx";

const Brand = () => {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    brand: "",
  });

  const HandleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const HandleClick = async (event) => {
    event.preventDefault();

    const { category, subcategory, brand } = formData;

    if (!category || !subcategory || !brand) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // const response = await BackEndApi.post("/add-brand", formData);
      console.log("Submitted data:", formData);
      // Reset form
      setFormData({ category: "", subcategory: "", brand: "" });
    } catch (error) {
      console.error("Brand submission failed:", error);
    }
  };

  return (
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
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
              <option value="sports">Sports</option>
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
              <option value="mobiles">Mobiles</option>
              <option value="laptops">Laptops</option>
              <option value="kitchen-appliances">Kitchen Appliances</option>
              <option value="shoes">Shoes</option>
              <option value="books-novels">Novels</option>
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
  );
};

export default Brand;
