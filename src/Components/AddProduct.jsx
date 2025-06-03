import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    description: "",
    category: "",
    sizes: [],
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      sizes: checked
        ? [...prev.sizes, value]
        : prev.sizes.filter((size) => size !== value),
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("price", formData.price);
    submitData.append("offerPrice", formData.offerPrice);
    submitData.append("description", formData.description);
    submitData.append("category", formData.category);
    if (imageFile) submitData.append("image", imageFile);
    formData.sizes.forEach((size) => submitData.append("sizes", size));

    try {
      await axios.post("http://localhost:5000/api/products", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Offer Price</label>
        <input
          type="number"
          name="offerPrice"
          value={formData.offerPrice}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <label>Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        <label>Available Sizes</label>
        <div className="size-options">
          {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
            <label key={size} className="size-checkbox">
              <input
                type="checkbox"
                value={size}
                checked={formData.sizes.includes(size)}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          ))}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
