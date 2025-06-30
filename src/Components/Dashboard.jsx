import Header from "./Common/Header"
import Sidebar from "./Common/sidebar"
import { LuFolderCheck } from "react-icons/lu";
import { PiUsersFill } from "react-icons/pi";
import { HiCurrencyRupee } from "react-icons/hi2";
import BasicPie from "./dashboard-pichart";


const Dashboard = () => {
  return (
    <>
      <div className="d_main_container">
        {" "}
        <div className="dashboard_main_card">
          <div className="dashboard_sec_card">
            <div className="detailscard">
              <div className="d-icon-container">
                <LuFolderCheck className="d-icon-color" />
              </div>
              <div>
                <h5>New Orders</h5>
                <h4>1025</h4>
              </div>
            </div>
            <div className="detailscard">
              <div className="v-icon-container">
                <PiUsersFill className="v-icon" />
              </div>
              <div>
                <h5>Visitors</h5>
                <h4>1025</h4>
              </div>
            </div>
            <div className="detailscard">
              <div className="rupe-icon-container">
                <HiCurrencyRupee className="rupe-icon" />
              </div>
              <div>
                <h5>Total Sales </h5>
                <h4>RS 255543.00</h4>
              </div>
            </div>
          </div>
        </div>
        <BasicPie />
      </div>
    </>
  );
};
export default Dashboard;
