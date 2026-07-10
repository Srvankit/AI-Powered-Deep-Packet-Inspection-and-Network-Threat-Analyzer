import axiosInstance from "./axiosConfig";

export const getFlows = async () => {

    const response = await axiosInstance.get("/api/flows");

    return response.data;

};