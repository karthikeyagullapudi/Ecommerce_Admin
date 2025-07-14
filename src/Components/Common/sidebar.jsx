import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const location = useLocation();

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
  };


  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebarCon">
      <ul>
        <Link to="/dashboard">
          <li className={`Dashboard ${isActive("/dashboard") ? "active" : ""}`}>
            <FaHome className="sidebarIcons" />Dashboard
          </li>
        </Link>

        <li
          className={
            isActive("/categoryCard") || isActive("/subCategory") ||
              isActive("/brand") || isActive("/coupons") || isActive("/color")
              ? "active-parent"
              : ""
          }
          onClick={toggleMaster}
        >
          <BiCategory className="sidebarIcons" />Master
          {isMasterOpen ? (
            <RiArrowDownSLine className="ArrowRight" />
          ) : (
            <MdKeyboardArrowRight className="ArrowRight" />
          )}
        </li>

        {isMasterOpen && (
          <ul className="submenu">
            <Link to="/categoryCard">
              <li className={isActive("/categoryCard") ? "active" : ""}>Category</li>
            </Link>
            <Link to="/subCategory">
              <li className={isActive("/subCategory") ? "active" : ""}>SubCategory</li>
            </Link>
            <Link to="/brand">
              <li className={isActive("/brand") ? "active" : ""}>Brand</li>
            </Link>
            <Link to="/coupons">
              <li className={isActive("/coupons") ? "active" : ""}>Coupons</li>
            </Link>
            <Link to="/color">
              <li className={isActive("/color") ? "active" : ""}>Colors</li>
            </Link>
          </ul>
        )}

        <li
          className={
            isActive("/addProductStatic") || isActive("/Product-List")
              ? "active-parent"
              : ""
          }
          onClick={toggleProduct}
        >
          <FaBoxOpen className="sidebarIcons" />Product
          {isProductOpen ? (
            <RiArrowDownSLine className="ArrowRight" />
          ) : (
            <MdKeyboardArrowRight className="ArrowRight" />
          )}
        </li>

        {isProductOpen && (
          <ul className="submenu">
            <Link to="/addProductStatic">
              <li className={isActive("/addProductStatic") ? "active" : ""}>Add Product</li>
            </Link>
            <Link to="/Product-List">
              <li className={isActive("/Product-List") ? "active" : ""}>Product List</li>
            </Link>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;