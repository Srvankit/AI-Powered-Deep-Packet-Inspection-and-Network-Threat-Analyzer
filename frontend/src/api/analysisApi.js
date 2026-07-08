import axiosInstance from "./axiosConfig";

export const analyzePcap = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await axiosInstance.post(
        "/api/analyze",
        formData
    );

    return response.data;
};