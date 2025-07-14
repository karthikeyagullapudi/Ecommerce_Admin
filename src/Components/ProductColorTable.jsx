import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

const ColorsCategoryTable = ({ colors }) => {
    const [colorList, setColorList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedColor, setEditedColor] = useState("");

    useEffect(() => {
        setColorList(colors || []);
    }, [colors]);

    const handleEdit = (index, currentColor) => {
        setEditIndex(index);
        setEditedColor(currentColor);
    };

    const handleSave = (id) => {
        const updated = [...colorList];
        updated[editIndex].color = editedColor;
        setColorList(updated);
        setEditIndex(null);
        setEditedColor("");

        // Optional: Backend update
        console.log("Saving updated color:", id, editedColor);
    };

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this color?")) return;

        setColorList((prev) => prev.filter((item) => item._id !== id));

        // Optional: Backend delete
        console.log("Deleted color:", id);
    };

    return (
        <div className="addCategoryCard">
            <div className="addcategory">
                <h2 className="category-heading">Add Color</h2>
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
                        <th className="Category">Color</th>
                        <th className="Action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {colorList.length > 0 ? (
                        colorList.map((item, index) => (
                            <tr className="tabledata" key={item._id || index}>
                                <td>{index + 1}</td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={editedColor}
                                            onChange={(e) => setEditedColor(e.target.value)}
                                        />
                                    ) : (
                                        item.color
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <TiTick className="TiTick" onClick={() => handleSave(item._id)} />
                                    ) : (
                                        <CiEdit
                                            className="CiEdit"
                                            onClick={() => handleEdit(index, item.color)}
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
                            <td colSpan="3">No Colors Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ColorsCategoryTable;
