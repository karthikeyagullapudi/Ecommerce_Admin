import React, { useEffect, useState } from "react";
import BackEndApi from "../Components/utils/httpclint"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";


const AProductTable = () => {
  const [addProduct, setAddProduct] = useState([])
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
      const response = await BackEndApi.get("/product/getallproducts")
      setAddProduct(response?.data?.data || [])
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSubCategories();
  }, []);


  return (
    <TableContainer component={Paper} sx={{ margin: 2 }}>
      <Table sx={{ minWidth: 1400 }} aria-label="product table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell><strong className="category-table-heading1">S.No</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Category</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Subcategory</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Brand</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Product Name</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Description</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Quantity</strong></TableCell>
            <TableCell><strong className="category-table-heading1">price</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Discount (%)</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Discount Price</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Warranty</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Coupon</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Color</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Specifications</strong></TableCell>
            <TableCell><strong className="category-table-heading1">Image</strong></TableCell>
            <TableCell align="center"><strong className="category-table-heading1">Action</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {addProduct.length > 0 ? (
            addProduct.map((row, index) => {
              const getCategoryName = (id) => {
                const found = categories.find((cat) => cat._id === id);
                return found ? found.category : id;
              };

              const getSubCategoryName = (id) => {
                const found = subCategories.find((sub) => sub._id === id);
                return found ? found.subCategory : id;
              };

              return (
                <TableRow key={index} className="productable">
                  <TableCell><strong className="category-names1">{index + 1}</strong></TableCell>
                  <TableCell><strong className="category-names1">{getCategoryName(row.category)}</strong></TableCell>
                  <TableCell><strong className="category-names1">{getSubCategoryName(row.subCategory)}</strong></TableCell>

                  <TableCell><strong className="category-names1">{row.brand}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.productName}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.description}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.quantity}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.price}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.discountPrice}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.discount}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.warranty}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.coupon}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.colors}</strong></TableCell>
                  <TableCell><strong className="category-names1">{row.specifications}</strong></TableCell>
                  <TableCell>
                    <img
                      src={row.file}
                      alt={row.productName}
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "1px solid grey",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center" className="produvctbuttons">
                    <Button variant="contained" color="success" sx={{ mr: 1 }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <h1>No products available</h1>
          )}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AProductTable;
