import React, { useState } from "react";
import CouponsCategoryTable from "../Components/CouponsTable.jsx";

const Coupons = () => {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (coupon.trim() === "") {
      alert("Please enter a coupon code.");
      return;
    }

    alert(`Coupon added: ${coupon}`);
    // TODO: Connect to backend API
    setCoupon("");
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit} className="category-form-design">
        <h2 className="category-heading">Add Coupon</h2>
        <div className="category-card">
          <input
            type="text"
            className="category-input"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            required
          />
          <button type="submit" className="category-add-btn">
            Add
          </button>
        </div>
      </form>

      <CouponsCategoryTable />
    </div>
  );
};

export default Coupons;
