import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

// Lazy-loaded components
const LoginPage = lazy(() => import("./Components/LoginPage.jsx"));
const Home = lazy(() => import("../src/pages/Home.jsx"));
const CategoryCard = lazy(() => import("./Components/CategoryCard.jsx"));
const SubCategory = lazy(() => import("./Components/SubCategory.jsx"));
const Brand = lazy(() => import("./Components/Brand.jsx"));
const Coupons = lazy(() => import("./Components/Coupons.jsx"));
const ProductColor = lazy(() => import("./Components/ProductColor.jsx"));
const AddProductStatic = lazy(() => import("./Components/aproduct.jsx"));
const Dashboard = lazy(() => import("./Components/Dashboard.jsx"));

const PageRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categoryCard" element={<CategoryCard />} />
        <Route path="/subCategory" element={<SubCategory />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/color" element={<ProductColor />} />
        <Route path="/addProductStatic" element={<AddProductStatic />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
