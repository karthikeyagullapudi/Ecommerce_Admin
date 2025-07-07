import * as React from "react";
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

function createData(
  id,
  category,
  subcategory,
  brand,
  productName,
  description,
  quantity,
  color,
  discountPercent,
  discountPrice,
  warranty,
  coupon,
  specifications
) {
  return {
    id,
    category,
    subcategory,
    brand,
    productName,
    description,
    quantity,
    color,
    discountPercent,
    discountPrice,
    warranty,
    coupon,
    specifications,
  };
}

// Example dummy data
const rows = [
  createData(
    1,
    "Electronics",
    "Mobiles",
    "Samsung",
    "Galaxy S21",
    "High-end smartphone",
    50,
    "Black",
    10,
    50000,
    "1 Year",
    "NEW10",
    "RAM: 8GB, Storage: 128GB"
  ),
  createData(
    2,
    "Fashion",
    "Men",
    "Levis",
    "Denim Jacket",
    "Classic blue denim",
    30,
    "Blue",
    20,
    2000,
    "6 Months",
    "STYLE20",
    "Size: L, Material: Cotton"
  ),
];

const aproductTable = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table sx={{ minWidth: 1300 }} aria-label="product table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell>
              <strong className="product-heading">S.No</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Category</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Subcategory</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Brand</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Product Name</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Description</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Quantity</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Color</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Discount (%)</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Discount Price</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Warranty</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Coupon</strong>
            </TableCell>
            <TableCell>
              <strong className="product-heading">Specifications</strong>
            </TableCell>
            <TableCell align="center">
              <strong className="product-heading">Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.subcategory}</TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell>{row.discountPercent}</TableCell>
              <TableCell>{row.discountPrice}</TableCell>
              <TableCell>{row.warranty}</TableCell>
              <TableCell>{row.coupon}</TableCell>
              <TableCell>{row.specifications}</TableCell>
              <TableCell align="center">
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

export default aproductTable;
