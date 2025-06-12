import React from "react";
import { useState } from "react";


const Brand = () => {
 const [formData, setFormData] = useState({});

const HandleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const HandleClick = async (event) => {
  event.preventDefault();
  try{
    const Response = await BackEndApi.post("/add-brand",formData)
    console.log(Response)
  }
  catch (error){
     console.log(error)
  }
};

  return (
    <div>
      <div className="category-container">
        <h2 className="category-heading">Select Category</h2>
        <div className="category-card">
          <select className="category-input">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </div>

      <div className="category-container">
        <h2 className="category-heading">Select Subcategory</h2>
        <div className="category-card">
          <select className="category-input">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </div>

      <div className="category-container">
        <h2 className="category-heading">Add Brand</h2>
        <div className="category-card">
          <input
            type="text"
            className="category-input"
            placeholder="Enter subcategory name"
          />
          <button className="category-add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
