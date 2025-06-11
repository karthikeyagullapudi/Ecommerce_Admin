import axios from "axios";

const url = "http://localhost:4000";
export const BackEndApi = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
