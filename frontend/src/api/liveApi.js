import axiosInstance from "./axiosConfig";

export const startCapture = async () => {

    const response = await axiosInstance.post(
        "/api/live/start"
    );

    return response.data;

};

export const stopCapture = async () => {

    const response = await axiosInstance.post(
        "/api/live/stop"
    );

    return response.data;

};

export const getStatus = async () => {

    const response = await axiosInstance.get(
        "/api/live/status"
    );

    return response.data;

};