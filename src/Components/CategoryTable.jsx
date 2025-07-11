import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import React, { useState, useEffect } from "react";

const CategoryTable = ({ categories }) => {
  console.log(categories)
  const [categoryList, setCategoryList] = useState([]);
<<<<<<< HEAD
  const [editIndex, setEditIndex] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");

=======
  console.log("adfasffddf", categoryList);
>>>>>>> 54a3d1714dcbd4626311e91eb89d218c2003afab
  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);

  const handleEdit = (index, currentName) => {
    setEditIndex(index);
    setEditedCategoryName(currentName);
  };

  const handleSave = (id) => {
    const updated = [...categoryList];
    updated[editIndex].category = editedCategoryName;
    setCategoryList(updated);
    setEditIndex(null);
    setEditedCategoryName("");

    // Optional: call backend API to update category
    console.log("Saving updated category:", id, editedCategoryName);
  };

  const handleDelete = async (categoryId) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      // Replace with API call
      // await axios.delete(`/category/delete/${categoryId}`);
      setCategoryList((prev) => prev.filter((item) => item._id !== categoryId));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <>
<<<<<<< HEAD
      <table style={{ width: "100%" }}>
=======
      <table style={{ width: "80%" }}>
>>>>>>> 54a3d1714dcbd4626311e91eb89d218c2003afab
        <thead>
          <tr className="tableHead">
            <th className="sNo">S.No</th>
            <th className="Category">Category</th>
            <th className="Action">Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 ? (
            categoryList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editedCategoryName}
                      onChange={(e) => setEditedCategoryName(e.target.value)}
                    />
                  ) : (
                    item.category
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    < TiTick className="TiTick" onClick={() => handleSave(item._id)} />
                  ) : (
                    <CiEdit
                      className="CiEdit"
                      onClick={() => handleEdit(index, item.category)}
                    />
                  )}
                  <RiDeleteBin6Line
                    className="RiDeleteBin6Line"
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 54a3d1714dcbd4626311e91eb89d218c2003afab
export default CategoryTable;
