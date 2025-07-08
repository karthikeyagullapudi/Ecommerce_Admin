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
            {[
              "S.No",
              "Category",
              "Subcategory",
              "Brand",
              "Product Name",
              "Description",
              "Quantity",
              "Color",
              "Discount (%)",
              "Discount Price",
              "Warranty",
              "Coupon",
              "Specifications",
              "Image",
              "Action",
            ].map((header) => (
              <TableCell key={header}>
                <strong className="product-heading">{header}</strong>
              </TableCell>
            ))}
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
              <TableCell>
                <img
                  src={row.image}
                  alt={row.productName}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                    borderRadius: 4,
                    border: "1px solid grey",
                  }}
                />
              </TableCell>
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

export default AProductTable;
