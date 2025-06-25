import "../src/app.css";
import PageRoutes from "./PageRoutes.jsx";
import Header from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideLayoutOnPaths = ["/"];
  const showLayout = !hideLayoutOnPaths.includes(location.pathname);

  return (
    <>
      {showLayout && <Header />}
      <div className="homeDiv">
        {showLayout && <Sidebar />}
        <PageRoutes />
      </div>
    </>
  );
}

export default App;
