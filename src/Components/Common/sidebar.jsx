import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  return (
    // <aside className="app-sidebar">
    //   <ul>
    //     <Link to="/dashboard">
    //       <li className="sidebar-link"> Dashboard</li>
    //     </Link>

    //     <li className="sidebar-button" onClick={toggleMaster}>
    //       Master{" "}
    //       <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>
    //         &#9654;
    //       </span>
    //     </li>

    //     {isMasterOpen && (
    //       <div className="sidebar-submenu">
    //         <Link to="/categoryCard">
    //           <li className="submenu-link">Category</li>
    //         </Link>
    //         <Link to="/subCategory">
    //           <li className="submenu-link">Subcategory</li>
    //         </Link>
    //         <Link to="/brand">
    //           <li className="submenu-link">Brand</li>
    //         </Link>
    //         <Link to="/coupons">
    //           <li className="submenu-link">Coupons</li>
    //         </Link>
    //         <Link to="/color">
    //           <li className="submenu-link">Colors</li>
    //         </Link>
    //       </div>
    //     )}
    //     <Link to="/addProductStatic">
    //       <li className="sidebar-link">Product</li>
    //     </Link>
    //     <li className="sidebar-link" onClick={() => onSelect("vendor")}>
    //       Vendor
    //     </li>
    //   </ul>
    // </aside>
    <ul>
      <Link to="/dashboard">
        <li className="sidebar-link"> Dashboard</li>
      </Link>

      <li className="sidebar-button" onClick={toggleMaster}>
        Master{" "}
        <span className={`arrow ${isMasterOpen ? "rotate" : ""}`}>&#9654;</span>
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
      <Link to="/addProductStatic">
        <li className="sidebar-link">Product</li>
      </Link>
      <li className="sidebar-link">Vendor</li>
    </ul>
  );
};

export default Sidebar;
