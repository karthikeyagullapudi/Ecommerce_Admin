import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { useState } from "react";
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
    <>
      <div className="sidebarCon">
        <ul>
          <Link to="/dashboard">
            <li className="Dashboard"><FaHome className="sidebarIcons" />Dashboard</li>
          </Link>
          <li><BiCategory className="sidebarIcons" />Master<MdKeyboardArrowRight className="ArrowRight" onClick={toggleMaster} /></li>
          {isMasterOpen && <ul>
            <Link to="/categoryCard">
              <li>Category</li>
            </Link>
            <Link to="/subCategory">
              <li>SubCategory</li>
            </Link>
            <Link to="/brand">
              <li>Brand</li>
            </Link>
            <Link to="/coupons">
              <li>Coupons</li>
            </Link>
            <Link to="/color">
              <li>Colors</li>
            </Link>
          </ul>}
          <li><FaBoxOpen className="sidebarIcons" />Product<MdKeyboardArrowRight className="ArrowRight" onClick={toggleProduct} /></li>
          {isProductOpen && <ul>
            <Link to="/addProductStatic">
              <li>Add Product</li>
            </Link>
            <Link to="/Product-List">
              <li>Product List</li>
            </Link>
          </ul>}
        </ul>
      </div>
    </>
  )
}
export default Sidebar