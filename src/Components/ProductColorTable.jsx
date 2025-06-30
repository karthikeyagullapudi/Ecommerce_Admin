import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(id, category, subcategory, brand, coupon, color) {
    return { id, category, subcategory, brand, coupon, color };
}

const rows = [
    createData(1, 'Electronics', 'Mobile', 'Samsung', 'ELEC10', 'Black'),
    createData(2, 'Fashion', 'Men Clothing', 'Nike', 'FASH20', 'Blue'),
    createData(3, 'Home Appliances', 'Kitchen', 'Philips', 'HOME15', 'White'),
    createData(4, 'Books', 'Fiction', 'Penguin', 'BOOK5', 'Orange'),
    createData(5, 'Toys', 'Educational', 'Lego', 'TOY25', 'Red'),
];

const ColorsCategoryTable = () => {
    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                <Table sx={{ minWidth: 850 }} aria-label="category table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell><strong className='category-table-heading'>S.No</strong></TableCell>
                            <TableCell><strong className='category-table-heading'>Category</strong></TableCell>
                            <TableCell><strong className='category-table-heading'>Subcategory</strong></TableCell>
                            <TableCell><strong className='category-table-heading'>Brand</strong></TableCell>
                            <TableCell><strong className='category-table-heading'>Coupons</strong></TableCell>
                            <TableCell><strong className='category-table-heading'>Colors</strong></TableCell>
                            <TableCell align="center"><strong className='category-table-heading'>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell><strong className='category-serial-no'>{row.id}</strong></TableCell>
                                <TableCell><strong className='category-names'>{row.category}</strong></TableCell>
                                <TableCell><strong className='category-sub-names'>{row.subcategory}</strong></TableCell>
                                <TableCell><strong className='category-brand-names'>{row.brand}</strong></TableCell>
                                <TableCell><strong className='category-coupon-names'>{row.coupon}</strong></TableCell>
                                <TableCell><strong className='category-color-names'>{row.color}</strong></TableCell>
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
        </>
    );
}
export default ColorsCategoryTable