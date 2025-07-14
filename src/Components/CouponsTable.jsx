import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const CouponsCategoryTable = ({ coupons }) => {
    const [couponList, setCouponList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedCoupon, setEditedCoupon] = useState("");

    useEffect(() => {
        setCouponList(coupons || []);
    }, [coupons]);

    const handleEdit = (index, currentCoupon) => {
        setEditIndex(index);
        setEditedCoupon(currentCoupon);
    };

    const handleSave = (id) => {
        const updated = [...couponList];
        updated[editIndex].coupon = editedCoupon;
        setCouponList(updated);
        setEditIndex(null);
        setEditedCoupon("");

        // Optional: Call backend API
        console.log("Saving updated coupon:", id, editedCoupon);
    };

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this coupon?")) return;

        setCouponList((prev) => prev.filter((item) => item._id !== id));

        // Optional: Call backend API
        console.log("Deleted coupon:", id);
    };

    return (
        <div className="addCategoryCard">
            <div className="addcategory">
                <h2 className="category-heading">Add Coupon</h2>
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
                        <th className="Category">Coupons</th>
                        <th className="Action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {couponList.length > 0 ? (
                        couponList.map((item, index) => (
                            <tr className="tabledata" key={item._id || index}>
                                <td>{index + 1}</td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={editedCoupon}
                                            onChange={(e) => setEditedCoupon(e.target.value)}
                                        />
                                    ) : (
                                        item.coupon
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <TiTick className="TiTick" onClick={() => handleSave(item._id)} />
                                    ) : (
                                        <CiEdit
                                            className="CiEdit"
                                            onClick={() => handleEdit(index, item.coupon)}
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
                            <td colSpan="6">No Coupons found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CouponsCategoryTable;
