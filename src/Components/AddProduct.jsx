import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    brand: "",
    name: "",
    color: "",
    price: "",
    discount: "",
    discountPrice: "",
    warranty: "",
    coupon: "",
    specifications: "",
  });

  const [images, setImages] = useState([
    { file: null, alt: "" },
    { file: null, alt: "" },
    { file: null, alt: "" },
    { file: null, alt: "" },
    { file: null, alt: "" },
  ]);

  const categories = ["Clothing", "Electronics", "Books"];
  const subcategories = ["T-Shirts", "Laptops", "Novels"];
  const brands = ["Brand A", "Brand B", "Brand C"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    setImages((prev) => {
      const newImages = [...prev];
      newImages[index].file = file;
      return newImages;
    });
  };

  const handleAltChange = (index, e) => {
    const alt = e.target.value;
    setImages((prev) => {
      const newImages = [...prev];
      newImages[index].alt = alt;
      return newImages;
    });
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form">
        <h2>Add New Product</h2>

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>Subcategory</label>
        <select
          name="subcategory"
          value={formData.subcategory}
          onChange={handleChange}
          required
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <label>Brand</label>
        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        >
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />

        <label>Color</label>
        <select
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        >
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="0"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
          <div style={{ flex: 1 }}>
            <label>Discount Price</label>
            <input
              type="number"
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Warranty</label>
            <input
              type="text"
              name="warranty"
              value={formData.warranty}
              onChange={handleChange}
              placeholder="e.g. 1 year"
            />
          </div>
        </div>

        <label>Coupon</label>
        <select name="coupon" value={formData.coupon} onChange={handleChange}>
          <option value="">Select Coupon</option>
          <option value="SAVE10">SAVE10 - 10% off</option>
          <option value="FREESHIP">FREESHIP - Free Shipping</option>
          <option value="NEWUSER">NEWUSER - New User Discount</option>
        </select>

        <label>Specifications</label>
        <textarea
          name="specifications"
          value={formData.specifications}
          onChange={handleChange}
          placeholder="Enter product specifications"
          className="specifications-textarea"
        />

        <div className="images-group">
          {images.map((img, idx) => (
            <div key={idx} className="image-upload-group">
              <label>Image {idx + 1}</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(idx, e)}
              />
              <input
                type="text"
                placeholder="Alt text"
                value={img.alt}
                onChange={(e) => handleAltChange(idx, e)}
                className="alt-text-input"
              />
            </div>
          ))}
        </div>

        <button type="button" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
