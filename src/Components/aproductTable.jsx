import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import BackEndApi from "../Components/utils/httpclint"; // ✅ Make sure this path is correct

const AProductTable = () => {
  const [addProduct, setAddProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await BackEndApi.get("/category/all-categories");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log("Error fetching categories", err);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const res = await BackEndApi.get("/subcategory/get-all-subcategories");
      setSubCategories(res.data.data || []);
    } catch (err) {
      console.log("Error fetching subcategories", err);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await BackEndApi.get("/product/getallproducts");
      setAddProduct(response?.data?.data || []);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSubCategories();
  }, []);

  const getCategoryName = (id) => {
    const found = categories.find((cat) => cat._id === id);
    return found ? found.category : id;
  };

  const getSubCategoryName = (id) => {
    const found = subCategories.find((sub) => sub._id === id);
    return found ? found.subCategory : id;
  };

  return (
    <div className="Productlayout">
      <div className="addCategoryCard">
        <div className="addcategory">
          <h2 className="category-heading">Add Coupon</h2>
          <div className="Search-Bar">
            <div className="SearchBar">
              <IoSearchSharp className="IoSearchSharp" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr className="tableHead">
                <th className="sNo">S.No</th>
                <th className="Category">Category</th>
                <th className="Category">SubCategory</th>
                <th className="Category">Brand</th>
                <th className="Category">Product Name</th>
                <th className="Category">Description</th>
                <th className="Category">Price</th>
                <th className="Category">Discount (%)</th>
                <th className="Category">Discount Price</th>
                <th className="Category">Warranty</th>
                <th className="Category">Coupon</th>
                <th className="Category">Color</th>
                <th className="Category">Specifications</th>
                <th className="Category">Image</th>
                <th className="Action">Action</th>
              </tr>
            </thead>
            <tbody>
              {addProduct.length > 0 ? (
                addProduct.map((row, index) => (
                  <tr key={row._id || index} className="tabledata">
                    <td>{index + 1}</td>
                    <td>{getCategoryName(row.category)}</td>
                    <td>{getSubCategoryName(row.subCategory)}</td>
                    <td>{row.brand}</td>
                    <td>{row.productName}</td>
                    <td>{row.description}</td>
                    <td>{row.price}</td>
                    <td>{row.discount}</td>
                    <td>{row.discountPrice}</td>
                    <td>{row.warranty}</td>
                    <td>{row.coupon}</td>
                    <td>{row.colors}</td>
                    <td>{row.specifications}</td>
                    <td>
                      {row.images && row.images.length > 0 ? (
                        <img src={row.images[0]} alt="Product" width={50} />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>
                      <CiEdit className="CiEdit" />
                      <RiDeleteBin6Line className="RiDeleteBin6Line" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="16" style={{ textAlign: "center" }}>
                    s No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AProductTable;
