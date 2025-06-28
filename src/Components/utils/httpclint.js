import axios from "axios";

const url = "http://localhost:4000";
const BackEndApi = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("authToken")
        ? localStorage.getItem("authToken")
        : null
    }`,
  },
});
export default BackEndApi;
