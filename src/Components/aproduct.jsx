import React, { useState } from "react";
import { BackEndApi } from "./utils/httpclint";

const AddProductStatic = () => {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleBinaryImage = async (event) => {
    const file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));

    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await BackEndApi.post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response?.status === 201) {
        const imageUrl = response?.data?.filename;
        setData({ ...data, [event.target.name]: imageUrl });
        console.log("file data===", data);
      }
    } catch (error) {
      console.log("Image upload error:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting data:", data);

    if (parseFloat(data.discountPrice) > parseFloat(data.price)) {
      alert("Discounted price cannot be greater than original price.");
      return;
    }

    try {
      const response = await BackEndApi.post("/product/addproduct", data);
      console.log("Product submitted:", response);
      alert("Product added successfully!");
    } catch (error) {
      alert("Failed to submit data");
      console.log("Submit error:", error);
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <label>Category</label>
        <select name="category" required onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
        </select>

        <label>Subcategory</label>
        <select name="subCategory" required onChange={handleChange}>
          <option value="">Select Subcategory</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Laptops">Laptops</option>
          <option value="Novels">Novels</option>
        </select>

        <label>Brand</label>
        <select name="brand" required onChange={handleChange}>
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
          required
          onChange={handleChange}
        />

        <label>Color</label>
        <select name="colors" required onChange={handleChange}>
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
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Discount Price</label>
        <input
          type="number"
          name="discountPrice"
          placeholder="0.00"
          min="0"
          required
          onChange={handleChange}
        />

        <label>Warranty</label>
        <input
          type="text"
          name="warranty"
          placeholder="e.g. 1 year"
          required
          onChange={handleChange}
        />

        <label>Coupon</label>
        <select name="coupon" required onChange={handleChange}>
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
          required
          onChange={handleChange}
        />

        <div className="images-group">
          <div className="image-upload-group">
            <label>Image 1</label>
            <input type="file" name="file" onChange={handleBinaryImage} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ height: "100px", marginTop: "10px" }}
              />
            )}
            <input
              type="text"
              name="altText1"
              placeholder="Alt text for Image 1"
              required
              onChange={handleChange}
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
