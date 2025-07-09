import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
const CategoryTable = () => {
  return (
    <>
      <table style={{ "width": "100%" }}>
        <thead>
          <tr className="tableHead">
            <th className="sNo">S.No</th>
            <th className="Category">Category</th>
            <th className="Action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tabledata">
            <td>1</td>
            <td>electronics</td>
            <td><CiEdit className="CiEdit" /><RiDeleteBin6Line className="RiDeleteBin6Line" /></td>
          </tr>
          <tr className="tabledata">
            <td>2</td>
            <td>electronics</td>
            <td><CiEdit className="CiEdit" /><RiDeleteBin6Line className="RiDeleteBin6Line" /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default CategoryTable