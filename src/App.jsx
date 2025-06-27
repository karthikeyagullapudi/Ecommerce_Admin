/* eslint-disable react-hooks/exhaustive-deps */
import "../src/app.css";
import PageRoutes from "./PageRoutes.jsx";
import Header from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const hideLayoutOnPaths = ["/"];
  const showLayout = hideLayoutOnPaths.includes(window.location.pathname);

  useEffect(() => {
    console.log("path name===", window.location.pathname);
    const token = localStorage.getItem("authToken");
    if (token == undefined || token == null || token == "") {
      navigate("/");
    } else {
      navigate(window.location.pathname);
    }
  }, [window.location]);

  return (
    <>
      {!showLayout && <Header />}
      <div className="homeDiv">
        {!showLayout && <Sidebar />}
        <PageRoutes />
      </div>
    </>
  );
}

export default App;
