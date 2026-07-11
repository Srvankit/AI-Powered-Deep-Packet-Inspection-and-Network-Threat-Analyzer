import axiosInstance from "./axiosConfig";

export const getInsights = async () => {

    const response = await axiosInstance.get(
        "/api/insights"
    );

    return response.data;

};