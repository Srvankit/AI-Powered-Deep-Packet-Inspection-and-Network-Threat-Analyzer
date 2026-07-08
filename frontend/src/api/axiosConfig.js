import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 30000,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export default axiosInstance;