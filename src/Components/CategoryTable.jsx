import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
const CategoryTable = ({ categories }) => {
  const [categoryList, setCategoryList] = useState([]);
  console.log("adfasffddf", categoryList)
  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);
  return (
    <>
      <table style={{ "width": "80%" }}>
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
                <td>{item.category}</td>
                <td>
                  <CiEdit className="CiEdit" />
                  <RiDeleteBin6Line className="RiDeleteBin6Line" />
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
  )
}
export default CategoryTable