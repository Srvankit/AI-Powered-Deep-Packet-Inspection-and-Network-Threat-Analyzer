import axiosInstance from "./axiosConfig";

export const downloadJson = async () => {

    const response = await axiosInstance.get(

        "/api/report/json",

        {

            responseType: "blob"

        }

    );

    return response.data;

};

export const downloadText = async () => {

    const response = await axiosInstance.get(

        "/api/report/text",

        {

            responseType: "blob"

        }

    );

    return response.data;

};

export const downloadPdf = async () => {

    const response = await axiosInstance.get(

        "/api/report/pdf",

        {

            responseType: "blob"

        }

    );

    return response.data;

};