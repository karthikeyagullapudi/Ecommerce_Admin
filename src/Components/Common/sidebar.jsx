import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onSelect }) => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  return (
    <aside className="app-sidebar">
      <ul>
        <li className="sidebar-link">
          {" "}
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className="sidebar-button" onClick={toggleMaster}>
          Master{" "}
          <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>
            &#9654;
          </span>
        </li>

        {isMasterOpen && (
          <div className="sidebar-submenu">
            <Link to="/categoryCard">
              <li className="submenu-link">Category</li>
            </Link>
            <Link to="/subCategory">
              <li className="submenu-link">Subcategory</li>
            </Link>
            <Link to="/brand">
              <li className="submenu-link">Brand</li>
            </Link>
            <Link to="/coupons">
              <li className="submenu-link">Coupons</li>
            </Link>
            <Link to="/color">
              <li className="submenu-link">Colors</li>
            </Link>
          </div>
        )}

        <li className="sidebar-link">
          <Link to="/addProductStatic">Product</Link>
        </li>
        <li className="sidebar-link" onClick={() => onSelect("vendor")}>
          Vendor
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
