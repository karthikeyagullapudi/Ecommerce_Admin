import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
  const Home = lazy(() => import("../src/pages/Home.jsx"));
  const CategoryCard = lazy(() => import("./Components/CategoryCard.jsx"));
  const SubCategory = lazy(() => import("./Components/SubCategory.jsx"));
  const Brand = lazy(() => import("./Components/Brand.jsx"));
  const Coupons = lazy(() => import("./Components/Coupons.jsx"));
  const ProductColor = lazy(() => import("./Components/ProductColor.jsx"));
  const AddProductStatic = lazy(() => import("./Components/aproduct.jsx"));

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoryCard" element={<CategoryCard />} />
          <Route path="/subCategory" element={<SubCategory />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/color" element={<ProductColor />} />
          <Route path="/addProductStatic" element={<AddProductStatic />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
