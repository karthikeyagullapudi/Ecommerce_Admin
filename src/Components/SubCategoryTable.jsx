import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";

const SubCategoryTable = ({ categories, subCategories }) => {
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedSubCategory, setEditedSubCategory] = useState("");

  useEffect(() => {
    setSubCategoryList(subCategories || []);
  }, [subCategories]);

  const getCategoryName = (id) => {
    if (!categories || categories.length === 0) return "Unknown";
    const found = categories.find((cat) => cat._id?.toString() === id?.toString());
    return found ? found.category : "Unknown";
  };


  const handleEdit = (index, currentSubCategory) => {
    setEditIndex(index);
    setEditedSubCategory(currentSubCategory);
  };

  const handleSave = (id) => {
    const updated = [...subCategoryList];
    updated[editIndex].subCategory = editedSubCategory;
    setSubCategoryList(updated);
    setEditIndex(null);
    setEditedSubCategory("");

    // Optional: API call
    console.log("Saving updated subcategory:", id, editedSubCategory);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this subcategory?")) return;

    const updated = subCategoryList.filter((item) => item._id !== id);
    setSubCategoryList(updated);

    // Optional: API call
    console.log("Deleted subcategory:", id);
  };

  return (
    <div className="addCategoryCard">
      <div className="addcategory">
        <h2 className="category-heading">Add SubCategory</h2>
        <div className="Search-Bar">
          <div className="SearchBar">
            <IoSearchSharp className="IoSearchSharp" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="tableHead">
            <th className="sNo">S.No</th>
            <th className="Category">Category</th>
            <th className="Category">SubCategory</th>
            <th className="Action">Action</th>
          </tr>
        </thead>
        <tbody>
          {subCategoryList.length > 0 ? (
            subCategoryList.map((item, index) => (
              <tr className="tabledata" key={item._id || index}>
                <td>{index + 1}</td>
                <td>{getCategoryName(item.categoryId)}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editedSubCategory}
                      onChange={(e) => setEditedSubCategory(e.target.value)}
                    />
                  ) : (
                    item.subCategory
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <TiTick className="TiTick" onClick={() => handleSave(item._id)} />
                  ) : (
                    <CiEdit
                      className="CiEdit"
                      onClick={() => handleEdit(index, item.subCategory)}
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
              <td colSpan="4">No SubCategories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategoryTable;
