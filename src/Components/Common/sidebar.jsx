import React, { useState } from "react";

const Sidebar = ({ onSelect }) => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  return (
    <aside className="app-sidebar">
      <ul>
        <li className="sidebar-link" onClick={() => onSelect("dashboard")}>
          Dashboard
        </li>

        <li className="sidebar-button" onClick={toggleMaster}>
          Master{" "}
          <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>
            &#9654;
          </span>
        </li>

        {isMasterOpen && (
          <div className="sidebar-submenu">
            <li className="submenu-link" onClick={() => onSelect("category")}>
              Category
            </li>
            <li
              className="submenu-link"
              onClick={() => onSelect("subcategory")}
            >
              Subcategory
            </li>
            <li className="submenu-link" onClick={() => onSelect("brand")}>
              Brand
            </li>
            <li className="submenu-link" onClick={() => onSelect("coupons")}>
              Coupons
            </li>
            <li className="submenu-link" onClick={() => onSelect("colors")}>
              Colors
            </li>
          </div>
        )}

        <li className="sidebar-link" onClick={() => onSelect("product")}>
          Product
        </li>
        <li className="sidebar-link" onClick={() => onSelect("vendor")}>
          Vendor
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
