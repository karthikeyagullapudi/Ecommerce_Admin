import React from "react";
import { useState } from "react";
import { BackEndApi } from "./utils/httpclint";

const AddProductStatic = () => {
  const [data, setdata] = useState({});

  const handleChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };
  const handlesubmit = async (event) => {
    console.log("sagar");
    event.preventDefault();
    try {
      const response = await BackEndApi.post("/api/addproduct", data);

      console.log(response);
    } catch (error) {
      alert("fail data submited");
      console.log(error);
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
      console.log("binary image response===", response);
    } catch (error) {
      console.log("image upload error===", error);
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handlesubmit}>
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
            <input
              type="text"
              name="altText1"
              placeholder="Alt text for Image 1"
              required
              onChange={handleChange}
            />
          </div>
          {/* <div className="image-upload-group">
            <label>Image 2</label>
            <input
              type="file"
              name="image2"
              accept="image/*"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="altText2"
              placeholder="Alt text for Image 2"
              required
              onChange={handleChange}
            />
          </div> */}
          {/* <div className="image-upload-group">
            <label>Image 3</label>
            <input
              type="file"
              name="image3"
              accept="image/*"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="altText3"
              placeholder="Alt text for Image 3"
              required
              onChange={handleChange}
            />
          </div> */}
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductStatic;
