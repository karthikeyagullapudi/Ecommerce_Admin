import "../src/app.css";
import PageRoutes from "./PageRoutes.jsx";
import AccountMenu from "./Components/Common/Header.jsx";
import Sidebar from "./Components/Common/sidebar.jsx";
import LoginPage from "./Components/LoginPage.jsx";

function App() {
  return (
    <>
      {/* <div>
        <AccountMenu />
        <div className="homeDiv">
          <Sidebar />
          <PageRoutes />
        </div>
      </div> */}
      <LoginPage />
    </>
  );
}

export default App;
