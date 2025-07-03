import React, { useState, useEffect } from "react";
import BackEndApi from "./utils/httpclint";

const AddProductStatic = () => {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [coupons, setCoupons] = useState([]);

  const getCategories = async (categoryId) => {
    try {
      const response = await BackEndApi.get(
        `/subcategory/get-subcategory/${categoryId}`
      );
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.log("categories error ===", error);
    }
  };

  const getBrands = async (categoryId, subCategoryId) => {
    try {
      const response = await BackEndApi.get("/brand/all-brands");
      if (response?.status === 200) {
        const filtered = response.data.data.filter(
          (brand) =>
            brand.categoryId === categoryId &&
            brand.subCategoryId === subCategoryId
        );
        setBrands(filtered || []);
      }
    } catch (error) {
      console.log("brand error ===", error);
    }
  };

  const getColors = async () => {
    try {
      const response = await BackEndApi.get("/color/all-colors");
      if (response?.status === 200) {
        setColors(response.data.data || []);
      }
    } catch (error) {
      console.log("color error ===", error);
    }
  };

  const getCoupons = async () => {
    try {
      const response = await BackEndApi.get("/coupon/all-coupons");
      if (response?.status === 200) {
        setCoupons(response.data.data || []);
      }
    } catch (error) {
      console.log("coupon error ===", error);
    }
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;

    if (name === "category") {
      setData((prevData) => ({
        ...prevData,
        category: value,
        subCategory: "",
        brand: "",
      }));

      if (value) {
        const result = await getCategories(value);
        if (result) {
          setSubCategory(result.data || []);
        }
      } else {
        setSubCategory([]);
      }

      setBrands([]);
    }

    if (name === "subCategory") {
      setData((prevData) => ({
        ...prevData,
        subCategory: value,
        brand: "",
      }));

      if (data.category && value) {
        await getBrands(data.category, value);
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
        }
      } catch (error) {
        console.log("Image upload error:", error);
      }
    }
  };

  const getAllCategory = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      if (response?.status === 200) {
        setCategories(response.data.data || []);
      }
    } catch (error) {
      console.log("Not able to fetch categories", error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getColors();
    getCoupons();
  }, []);

  useEffect(() => {
    if (data.price && data.discount) {
      const price = parseFloat(data.price);
      const discount = parseFloat(data.discount);
      if (!isNaN(price) && !isNaN(discount)) {
        const discountPrice = price - (price * discount) / 100;
        setData((prev) => ({
          ...prev,
          discountPrice: discountPrice.toFixed(2),
        }));
      }
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
      alert("Product added successfully!");
      console.log(response);
      setData({});
      setImagePreview("");
      event.target.reset();
    } catch (error) {
      alert("Failed to submit data");
      console.log("Submit error:", error);
    }
  };

  return (
    <>
      <div className="layout">
        <div className="add-product-container">
          <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>

            <label>Category</label>
            <select name="category" required onChange={handleChange}>
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.category}
                </option>
              ))}
            </select>

            <label>Subcategory</label>
            <select name="subCategory" required onChange={handleChange}>
              <option value="">Select Subcategory</option>
              {subCategory.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.subCategory}
                </option>
              ))}
            </select>

            <label>Brand</label>
            <select name="brand" required onChange={handleChange}>
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b._id} value={b.brand}>
                  {b.brand}
                </option>
              ))}
            </select>

            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              required
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter product description"
              className="description-textarea"
              required
              onChange={handleChange}
            />

            <label>Color</label>
            <select name="colors" required onChange={handleChange}>
              <option value="">Select Color</option>
              {colors.map((color) => (
                <option key={color._id} value={color.color}>
                  {color.color}
                </option>
              ))}
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
              {coupons.map((coupon) => (
                <option key={coupon._id} value={coupon.coupon}>
                  {coupon.coupon}
                </option>
              ))}
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
    </>
  );
};

export default AddProductStatic;
