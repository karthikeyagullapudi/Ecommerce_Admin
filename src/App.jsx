import "../src/app.css";
import PageRoutes from "./PageRoutes.jsx";
import AccountMenu from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";

function App() {
  return (
    <>
      <div>
        <AccountMenu />
        <div className="homeDiv">
          <Sidebar />
          <PageRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
