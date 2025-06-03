import React from "react";

const Coupons = () => {
  return (
    <div className="category-container">
      <h2 className="category-heading">Add Coupon</h2>
      <div className="category-card">
        <input
          type="text"
          className="category-input"
          placeholder="Enter coupon code"
        />
        <button className="category-add-btn">Add</button>
      </div>
    </div>
  );
};

export default Coupons;
