import React, { useState } from "react";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/sidebar";
import CategoryCard from "./Components/CategoryCard";
import AddProduct from "./Components/AddProduct";
import SubCategory from "./Components/SubCategory";
import Brand from "./Components/Brand";
import Coupons from "./Components/Coupons";
import Color from "./Components/ProductColor";
import AddProductStatic from "./Components/aproduct";
import "./app.css";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-layout">
        <Sidebar onSelect={setActivePage} />
        <main className="app-main">
          {activePage === "dashboard" && <h2>Welcome to Admin Panel</h2>}
          {activePage === "category" && <CategoryCard />}
          {activePage === "subcategory" && <SubCategory />}
          {activePage === "brand" && <Brand />}
          {activePage === "coupons" && <Coupons />}
          {activePage === "colors" && <Color />}
          {activePage === "product" && <AddProductStatic />}
          {activePage === "vendor" && <h2>Vendor Page</h2>}
        </main>
      </div>
    </div>
  );
};

export default App;
