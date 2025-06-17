import React, { useState, useEffect } from "react";
import { BackEndApi } from "./utils/httpclint";

const AddProductStatic = () => {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  const getCategories = async (category) => {
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
    const { name, value } = event.target;

    if (name === "category") {
      const result = await getCategories(value);
      if (result) {
        setSubCategory(result.data || []);
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBinaryImage = async (event) => {
    const file = event.target.files[0];
    const fieldName = event.target.name;

    if (file) {
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
          const imageUrl = response?.data?.path;
          setData((prev) => ({ ...prev, [fieldName]: imageUrl }));
          console.log("Image uploaded successfully:", imageUrl);
        }
      } catch (error) {
        console.log("Image upload error:", error);
      }
    }
  };

  useEffect(() => {
    if (data.price && data.discount) {
      const price = parseFloat(data.price);
      const discount = parseFloat(data.discount);
      const discountPrice = price - (price * discount) / 100;
      setData((prev) => ({ ...prev, discountPrice: discountPrice.toFixed(2) }));
    }
  }, [data.price, data.discount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (parseFloat(data.discountPrice) > parseFloat(data.price)) {
      alert("Discounted price cannot be greater than original price.");
      return;
    }

    try {
      const response = await BackEndApi.post("/product/addproduct", data);
      console.log("Product submitted:", response);
      alert("Product added successfully!");
      setData({});
      setImagePreview("");
      event.target.reset();
    } catch (error) {
      alert("Failed to submit data");
      console.log("Submit error:", error);
    }
  };

  return (
    <div className="layout">
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
            {subCategory.length > 0 &&
              subCategory.map((sub, idx) => (
                <option key={idx} value={sub.name}>
                  {sub.name}
                </option>
              ))}
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
            value={data.discountPrice || ""}
            readOnly
            placeholder="Auto calculated"
          />

          <label>Warranty</label>
          <select name="warranty" required onChange={handleChange}>
            <option value="">Select Warranty</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="3 Years">3 Years</option>
          </select>

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
              <input type="file" name="image1" onChange={handleBinaryImage} />
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
    </div>
  );
};

export default AddProductStatic;
