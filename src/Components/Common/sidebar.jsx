import React, { useState } from "react";

const Sidebar = ({ onSelect }) => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  return (
    <aside className="app-sidebar">
      <button className="sidebar-link" onClick={() => onSelect("dashboard")}>
        Dashboard
      </button>

      <button className="sidebar-button" onClick={toggleMaster}>
        Master{" "}
        <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>&#9654;</span>
      </button>

      {isMasterOpen && (
        <div className="sidebar-submenu">
          <button className="submenu-link" onClick={() => onSelect("category")}>
            Category
          </button>
          <button
            className="submenu-link"
            onClick={() => onSelect("subcategory")}
          >
            Subcategory
          </button>
          <button className="submenu-link" onClick={() => onSelect("brand")}>
            Brand
          </button>
          <button className="submenu-link" onClick={() => onSelect("coupons")}>
            Coupons
          </button>
          <button className="submenu-link" onClick={() => onSelect("colors")}>
            Colors
          </button>
        </div>
      )}

      <button className="sidebar-link" onClick={() => onSelect("product")}>
        Product
      </button>
      <button className="sidebar-link" onClick={() => onSelect("vendor")}>
        Vendor
      </button>
    </aside>
  );
};

export default Sidebar;
