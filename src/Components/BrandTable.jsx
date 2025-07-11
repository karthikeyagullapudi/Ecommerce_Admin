import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import React, { useState, useEffect } from "react";

const BrandCategoryTable = ({ brands, categories, subCategories }) => {
    const [brandList, setBrandList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedBrand, setEditedBrand] = useState("");

    useEffect(() => {
        setBrandList(brands || []);
    }, [brands]);

    const getCategoryName = (id) => {
        const found = categories?.find((cat) => cat._id?.toString() === id?.toString());
        return found ? found.category : "Unknown";
    };

    const getSubCategoryName = (id) => {
        const found = subCategories?.find((sub) => sub._id?.toString() === id?.toString());
        return found ? found.subCategory : "Unknown";
    };

    const handleEdit = (index, currentBrand) => {
        setEditIndex(index);
        setEditedBrand(currentBrand);
    };

    const handleSave = (id) => {
        const updated = [...brandList];
        updated[editIndex].brand = editedBrand;
        setBrandList(updated);
        setEditIndex(null);
        setEditedBrand("");

        // Optional: Update in backend
        console.log("Saving brand:", id, editedBrand);
    };

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this brand?")) return;
        setBrandList((prev) => prev.filter((item) => item._id !== id));

        // Optional: Delete from backend
        console.log("Deleted brand:", id);
    };

    return (
        <table style={{ width: "100%" }}>
            <thead>
                <tr className="tableHead">
                    <th className="sNo">S.No</th>
                    <th className="Category">Category</th>
                    <th className="Category">SubCategory</th>
                    <th className="Category">Brand</th>
                    <th className="Action">Action</th>
                </tr>
            </thead>
            <tbody>
                {brandList.length > 0 ? (
                    brandList.map((item, index) => (
                        <tr className="tabledata" key={item._id || index}>
                            <td>{index + 1}</td>
                            <td>{getCategoryName(item.categoryId)}</td>
                            <td>{getSubCategoryName(item.subCategoryId)}</td>
                            <td>
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedBrand}
                                        onChange={(e) => setEditedBrand(e.target.value)}
                                    />
                                ) : (
                                    item.brand
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <TiTick className="TiTick" onClick={() => handleSave(item._id)} />
                                ) : (
                                    <CiEdit
                                        className="CiEdit"
                                        onClick={() => handleEdit(index, item.brand)}
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
                        <td colSpan="5">No Brands found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default BrandCategoryTable;
