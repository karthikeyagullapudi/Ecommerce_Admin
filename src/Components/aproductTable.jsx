import React from "react";
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

const rows = [
  {
    id: 1,
    category: "Electronics",
    subcategory: "Mobiles",
    brand: "Samsung",
    productName: "Galaxy S21",
    description: "High-end smartphone",
    quantity: 50,
    color: "Black",
    discountPercent: 10,
    discountPrice: 50000,
    warranty: "1 Year",
    coupon: "NEW10",
    specifications: "RAM: 8GB, Storage: 128GB",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    category: "Fashion",
    subcategory: "Men",
    brand: "Levis",
    productName: "Denim Jacket",
    description: "Classic blue denim",
    quantity: 30,
    color: "Blue",
    discountPercent: 20,
    discountPrice: 2000,
    warranty: "6 Months",
    coupon: "STYLE20",
    specifications: "Size: L, Material: Cotton",
    image: "https://via.placeholder.com/80",
  },
];

const AProductTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: 2 }}>
      <Table sx={{ minWidth: 1400 }} aria-label="product table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell>
              <strong className="category-table-heading1">S.No</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Category</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Subcategory</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Brand</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Product Name</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Description</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Quantity</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Color</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Discount (%)</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">
                Discount Price
              </strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Warranty</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">Coupon</strong>
            </TableCell>
            <TableCell>
              <strong className="category-table-heading1">
                Specifications
              </strong>
            </TableCell>
            <TableCell align="center">
              <strong className="category-table-heading1">Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <strong className="category-names1">{row.id}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.category}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.subcategory}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.brand}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.productName}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.description}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.quantity}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.color}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">
                  {row.discountPercent}
                </strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.discountPrice}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.warranty}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">{row.coupon}</strong>
              </TableCell>
              <TableCell>
                <strong className="category-names1">
                  {row.specifications}
                </strong>
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AProductTable;
