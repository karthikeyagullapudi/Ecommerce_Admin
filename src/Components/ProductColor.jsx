import React, { useState, useEffect } from "react";
import ColorsCategoryTable from "../Components/ProductColorTable.jsx";
import BackEndApi from "./utils/httpclint.js";

const Color = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]); // 🆕 color list state

  const fetchColors = async () => {
    try {
      const response = await BackEndApi.get("/color/all-colors");
      if (response.status === 200) {
        setColors(response.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  useEffect(() => {
    fetchColors(); // Load on mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (color.trim() === "") {
      alert("Please enter a color name.");
      return;
    }

    try {
      const response = await BackEndApi.post("/color/add-color", {
        color: color.trim(),
      });

      if (response.status === 201 || response.status === 200) {
        alert("Color added successfully!");
        setColor("");
        fetchColors(); // 🆕 Refresh table
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
    <div className="layout">
      <form onSubmit={handleSubmit} className="category-form-design">
        <div className="categoryCard">
          <h2 className="category-heading">Color Name</h2>
          <div className="category-card">
            <input
              type="text"
              className="category-input"
              placeholder="Enter color name"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>
          <div className="category-add-btn">
            <button type="submit" >
              Add
            </button>
          </div>
        </div>
      </form>

      <ColorsCategoryTable colors={colors} /> {/* ✅ Pass data */}
    </div>
  );
};

export default Color;
