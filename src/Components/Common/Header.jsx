import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profileCard");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Headersec">
      <div className=" logoImg">
        <img
          src="/src/assets/images/flipkart-white-logo-download-png-701751694706835umimidcdyz-removebg-preview.png"
          alt="Logo"
        />
      </div>

      <div className=" logoutdiv">
        <div onClick={toggleMenu}>
          <button className="profile-button">P</button>
          {showMenu && (
            <ul className="dropdown-menu-list">
              <li className="logoutSec" onClick={handleProfile}><FaUser />Profile</li>
              <li className="logoutSec" onClick={handleLogout}><RiLogoutCircleFill />Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>

  );
};

export default Header;
