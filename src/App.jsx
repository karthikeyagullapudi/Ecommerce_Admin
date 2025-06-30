/* eslint-disable react-hooks/exhaustive-deps */
import "../src/app.css";
import PageRoutes from "./PageRoutes.jsx";
import Header from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const checkAuthRoutes = () => {
    const authRoutesArr = ["/"];
    const result = authRoutesArr.includes(location.pathname);
    console.log("is logged in result is===", result);
    if (result) {
      setIsLoggedIn(() => !result);
    }
  };

  useEffect(() => {
    checkAuthRoutes();
    console.log("after changing route ===", isLoggedIn);
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
