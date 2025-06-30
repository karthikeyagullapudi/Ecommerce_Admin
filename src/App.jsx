import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageRoutes from "./PageRoutes.jsx";
import Header from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import "../src/app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const authRoutesArr = ["/"];
    const result = authRoutesArr.includes(location.pathname);
    setIsLoggedIn(() => !result);
  }, [location.pathname]);

  return (
    <>
      {isLoggedIn && <Header />}
      <div className="homeDiv">
        {isLoggedIn && <Sidebar />}
        <PageRoutes />
      </div>
    </>
  );
}

export default App;
