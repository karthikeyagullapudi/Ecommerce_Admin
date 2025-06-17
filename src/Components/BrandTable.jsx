import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(id, category, subcategory, brand) {
    return { id, category, subcategory, brand };
}

const rows = [
    createData(1, 'Electronics', 'Mobile', 'Samsung'),
    createData(2, 'Fashion', 'Men Clothing', 'Nike'),
    createData(3, 'Home Appliances', 'Kitchen', 'Philips'),
    createData(4, 'Books', 'Fiction', 'Penguin'),
    createData(5, 'Toys', 'Educational', 'Lego'),
];

export default function BrandCategoryTable() {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="category table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell><strong className='category-table-heading'>S.No</strong></TableCell>
                        <TableCell><strong className='category-table-heading'>Category</strong></TableCell>
                        <TableCell><strong className='category-table-heading'>Subcategory</strong></TableCell>
                        <TableCell><strong className='category-table-heading'>Brand</strong></TableCell>
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
}
