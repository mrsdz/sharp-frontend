import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_URL,
  headers: {
    "Content-type": "application/json",
  },
  adapter: "fetch",
});

export default AxiosInstance;
