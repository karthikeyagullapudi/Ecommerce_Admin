import React, { useState } from "react";
import ColorsCategoryTable from "../Components/ProductColorTable.jsx";

const Color = () => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color.trim() === "") {
      alert("Please enter a color name.");
      return;
    }

    alert(`Color added: ${color}`);
    // TODO: Integrate with backend API
    setColor("");
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
