import React, { useState, useEffect } from "react";
import { BackEndApi } from "./utils/httpclint";

const AddProductStatic = () => {
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const getCatories = async (category) => {
    try {
      const response = await BackEndApi.get(
        `/subcategory/all-subcategories/${category}`
      );
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.log("categories error===", error);
    }
  };

  const handleChange = async (event) => {
    if (event.target.name === "category") {
      console.log("cat block hits");
      const subCategories = await getCatories(event.target.value);
      if (subCategories?.status === 200) {
        console.log("all sub category data is====", subCategories);
        setSubCategory(subCategories?.data);
        setSubCategory(subCategories?.data);
      }
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting data:", data);
    try {
      const response = await BackEndApi.post("/api/addproduct", data);
      console.log("Product added successfully:", response);
    } catch (error) {
      alert("Failed to submit data");
      console.error("Submit error:", error);
    }
  };

  const handleBinaryImage = async (event) => {
    let formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      const response = await BackEndApi.post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image upload response:", response);

      setData({
        ...data,
        image1: {
          url: response.data.url,
          alt: data.altText1 || "",
        },
      });
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      setCategory(response.data.data);
      console.log("Categories fetched:", response.data.data);
    } catch (error) {
      console.error("Couldn't fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <label>Category</label>
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          {category.map((cat) => (
            <option key={cat._id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>

        <label>Sub-Category</label>
        <select name="subCategory" onChange={handleChange} required>
          <option value="">Select Sub-Category</option>
          {subCategory.map((sub) => (
            <option key={sub._id} value={sub.subCategory}>
              {sub.subCategory}
            </option>
          ))}
        </select>

        <label>Brand</label>
        <select name="brand" onChange={handleChange} required>
          <option value="">Select Brand</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
        </select>

        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Enter product name"
          onChange={handleChange}
          required
        />

        <label>Color</label>
        <select name="colors" onChange={handleChange} required>
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="0.00"
              min="0"
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Discount (%)</label>
            <input
              type="number"
              name="discount"
              placeholder="0"
              min="0"
              max="100"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Discount Price</label>
        <input
          type="number"
          name="discountPrice"
          placeholder="0.00"
          min="0"
          onChange={handleChange}
          required
        />

        <label>Warranty</label>
        <input
          type="text"
          name="warranty"
          placeholder="e.g. 1 year"
          onChange={handleChange}
          required
        />

        <label>Coupon</label>
        <select name="coupon" onChange={handleChange} required>
          <option value="">Select Coupon</option>
          <option value="SAVE10">SAVE10 - 10% Off</option>
          <option value="FREESHIP">FREESHIP - Free Shipping</option>
          <option value="NEWUSER">NEWUSER - New User Discount</option>
        </select>

        <label>Specifications</label>
        <textarea
          name="specifications"
          placeholder="Enter product specifications"
          className="specifications-textarea"
          onChange={handleChange}
          required
        />

        <div className="images-group">
          <div className="image-upload-group">
            <label>Image 1</label>
            <input type="file" name="file" onChange={handleBinaryImage} />
            <input
              type="text"
              name="altText1"
              placeholder="Alt text for Image 1"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductStatic;
