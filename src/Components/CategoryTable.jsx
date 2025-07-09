import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CategoryTable = ({ categories }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);

  const handleEdit = (category) => {
    setEditingId(category._id);
    setEditedName(category.category);
  };

  const handleSave = (categoryId) => {
    const updatedList = categoryList.map((cat) =>
      cat._id === categoryId ? { ...cat, category: editedName } : cat
    );
    setCategoryList(updatedList);
    setEditingId(null);
    setEditedName("");
  };

  const handleDelete = (categoryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      const updatedList = categoryList.filter((cat) => cat._id !== categoryId);
      setCategoryList(updatedList);
      alert("Category deleted successfully.");
    }
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="category table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell>
              <strong>S.No</strong>
            </TableCell>
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryList.map((row, index) => (
            <TableRow key={row._id || index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {editingId === row._id ? (
                  <TextField
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    size="small"
                  />
                ) : (
                  <strong>{row.category}</strong>
                )}
              </TableCell>
              <TableCell align="center">
                {editingId === row._id ? (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleSave(row._id)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 1 }}
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(row._id)}
                >
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

export default CategoryTable;
