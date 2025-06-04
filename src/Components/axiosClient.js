import axios from "axios";
import "dotenv/config";

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
