import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
const ColorsCategoryTable = () => {
  return (
    <>
      <table style={{ "width": "100%" }}>
        <thead>
          <tr className="tableHead">
            <th className="sNo">S.No</th>
            <th className="Category">Category</th>
            <th className="Category">SubCategory</th>
            <th className="Category">Brand</th>
            <th className="Category">Product Name</th>
            <th className="Category">Description</th>
            <th className="Category">Quantity</th>
            <th className="Category">price</th>
            <th className="Category">Discount (%)</th>
            <th className="Category">Discount Price</th>
            <th className="Category">Warranty</th>
            <th className="Category">Coupon</th>
            <th className="Category">Color</th>
            <th className="Category">Specifications</th>
            <th className="Category">Image</th>
            <th className="Action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tabledata">
            <td>1</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td><CiEdit className="CiEdit" /><RiDeleteBin6Line className="RiDeleteBin6Line" /></td>
          </tr>
          <tr className="tabledata">
            <td>2</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td>electronics</td>
            <td><CiEdit className="CiEdit" /><RiDeleteBin6Line className="RiDeleteBin6Line" /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default ColorsCategoryTable