import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageRoutes from "./PageRoutes.jsx";
import Header from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import "../src/app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // keep your variable name
  const location = useLocation();

  useEffect(() => {
    const authRoutesArr = ["/"]; // routes where we hide header/sidebar
    const result = authRoutesArr.includes(location.pathname);
    setIsLoggedIn(() => !result); // true means logged in → show layout
  }, [location.pathname]);

  return (
    <>
      {isLoggedIn && <Header />}
      <div className="homeDiv">
        {isLoggedIn && <Sidebar />}
        <PageRoutes /> {/* This renders your actual route components */}
        {/* <Outlet /> Optional: for nested routing support */}
      </div>
    </>
  );
}

export default App;
