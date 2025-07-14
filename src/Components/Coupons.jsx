import React, { useState, useEffect } from "react";
import CouponsCategoryTable from "../Components/CouponsTable.jsx";
import BackEndApi from "../Components/utils/httpclint.js";

const Coupons = () => {
  const [coupon, setCoupon] = useState("");
  const [couponList, setCouponList] = useState([]); // 🆕

  const fetchCoupons = async () => {
    try {
      const response = await BackEndApi.get("/coupon/all-coupons");
      if (response.status === 200) {
        setCouponList(response.data.data || []);
      }
    } catch (error) {
      console.error("Fetch coupons failed:", error);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (coupon.trim() === "") {
      alert("Please enter a coupon code.");
      return;
    }

    try {
      const response = await BackEndApi.post("/coupon/add-coupon", {
        coupon: coupon.trim(),
      });

      if (response.status === 201 || response.status === 200) {
        alert("Coupon added successfully!");
        setCoupon("");
        fetchCoupons(); // 🆕 refresh table after add
      } else {
        alert("Failed to add coupon. Please try again.");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong!";
      alert(message);
    }
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit} className="category-form-design">
        <div className="categoryCard">
          <h2 className="category-heading">Coupon Name</h2>
          <div className="category-card">
            <input
              type="text"
              className="category-input"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
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

      <CouponsCategoryTable coupons={couponList} />
    </div>
  );
};

export default Coupons;
