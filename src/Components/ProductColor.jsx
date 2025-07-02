import React, { useState } from "react";
import ColorsCategoryTable from "../Components/ProductColorTable.jsx";
import BackEndApi from "./utils/httpclint.js"; // Adjust the path if needed

const Color = () => {
  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (color.trim() === "") {
      alert("Please enter a color name.");
      return;
    }

    try {
      const response = await BackEndApi.post("/color/add-color", {
        color,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Color added successfully!");
        setColor("");
      } else {
        alert("Failed to add color. Please try again.");
      }
    } catch (error) {
      console.error("Error adding color:", error);
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      alert(message);
    }
  };

  return (
    <>
      <div className="layout">
        <form onSubmit={handleSubmit} className="category-form-design">
          <h2 className="category-heading">Add Color</h2>
          <div className="category-card">
            <input
              type="text"
              className="category-input"
              placeholder="Enter color name"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
            <button type="submit" className="category-add-btn">
              Add
            </button>
          </div>
        </form>

        <ColorsCategoryTable />
      </div>
    </>
  );
};

export default Color;
