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
    <div className="category-container">
      <h2 className="category-heading">Add Brand</h2>
      <div className="category-card">
        <input
          type="text"
          className="category-input"
          name="brand"
          placeholder="Enter brand name"
          onChange={HandleChange}/>
        <button className="category-add-btn"onClick={HandleClick}>Add</button>
      </div>
    </div>
  );
};

export default Brand;
