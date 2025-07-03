import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };
  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
  };

  return (
    <aside className="app-sidebar">
      <ul>
        <li className="sidebar-link">
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className="sidebar-button" onClick={toggleMaster}>
          Master{" "}
          <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>
            &#9654;
          </span>
        </li>

        {isMasterOpen && (
          <ul className="sidebar-submenu">
            <li className="submenu-link">
              <Link to="/categoryCard">Category</Link>
            </li>
            <li className="submenu-link">
              <Link to="/subCategory">Subcategory</Link>
            </li>
            <li className="submenu-link">
              <Link to="/brand">Brand</Link>
            </li>
            <li className="submenu-link">
              <Link to="/coupons">Coupons</Link>
            </li>
            <li className="submenu-link">
              <Link to="/color">Colors</Link>
            </li>
          </ul>
        )}
        <li className="sidebar-button" onClick={toggleProduct}>
          Product{" "}
          <span className={`arrow ${isProductOpen ? "rotate" : ""}`}>
            &#9654;
          </span>
        </li>

        {isProductOpen && (
          <ul className="sidebar-submenu">
            <li className="submenu-link">
              <Link to="/addProductStatic">Add Product</Link>
            </li>
            <li className="submenu-link">
              <Link to="/Product-List">Product List</Link>
            </li>

          </ul>
        )}

        <li className="sidebar-link">
          <Link to="/vendor">Vendor</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
