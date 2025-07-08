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
        <Link to="/dashboard">
          <li className="sidebar-link">
            Dashboard
          </li>
        </Link>
        <li className="sidebar-button" onClick={toggleMaster}>
          Master{" "}
          <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>
            &#9654;
          </span>
        </li>

        {isMasterOpen && (
          <ul className="sidebar-submenu">
            <Link to="/categoryCard">
              <li className="submenu-link">
                Category
              </li>
            </Link>
            <Link to="/subCategory">
              <li className="submenu-link">
                Subcategory
              </li>
            </Link>
            <Link to="/brand">
              <li className="submenu-link">
                Brand
              </li>
            </Link>
            <Link to="/coupons">
              <li className="submenu-link">
                Coupons
              </li>
            </Link>
            <Link to="/color">
              <li className="submenu-link">
                Colors
              </li>
            </Link>
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
            <Link to="/addProductStatic">
              <li className="submenu-link">
                Add Product
              </li>
            </Link>
            <Link to="/Product-List">
              <li className="submenu-link">
                Product List
              </li>
            </Link>
          </ul>
        )}
        <Link to="/vendor">
          <li className="sidebar-link">
            Vendor
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
