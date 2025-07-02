import React, { useState } from "react";
import CouponsCategoryTable from "../Components/CouponsTable.jsx";
import BackEndApi from "../Components/utils/httpclint.js";

const Coupons = () => {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (coupon.trim() === "") {
      alert("Please enter a coupon code.");
      return;
    }

    try {
      const response = await BackEndApi.post("/coupon/add-coupon", {
        coupon,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Coupon added successfully!");
        setCoupon("");
      } else {
        alert("Failed to add coupon. Please try again.");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong!";
      alert(message);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Coupons;
