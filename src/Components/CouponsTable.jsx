import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const CouponsCategoryTable = ({ coupons }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table sx={{ minWidth: 750 }} aria-label="coupon table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell><strong className="category-table-heading">S.No</strong></TableCell>
                        <TableCell><strong className="category-table-heading">Coupon</strong></TableCell>
                        <TableCell align="center"><strong className="category-table-heading">Action</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coupons?.map((row, index) => (
                        <TableRow key={row._id || index}>
                            <TableCell><strong className="category-names">{index + 1}</strong></TableCell>
                            <TableCell><strong className="category-names">{row.coupon}</strong></TableCell>
                            <TableCell align="center">
                                <Button variant="contained" color="success" sx={{ mr: 1 }}>Edit</Button>
                                <Button variant="contained" color="error">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CouponsCategoryTable;
