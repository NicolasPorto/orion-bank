import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return config;
});

export const criarQRCode = async (request) => {
    try {
        const respose = await api.post("/qrCode/criarQRCode", request);
        return respose.data
    } catch (error) {
        throw error.response.data;
    }
}

export const consultarEMV = async (emv, codigoConta) => {
    try {
        const respose = await api.get(`/qrCode/consultarEMV?emv=${emv}&codigoConta=${codigoConta}`);
        return respose.data
    } catch (error) {
        throw error.response.data;
    }
}