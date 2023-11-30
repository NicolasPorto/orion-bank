import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return config;
});

export const buscarSaldoConta = async (codigoConta) => {
    try {
        const response = await api.get(`/saldo/${codigoConta}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const buscarConta = async (codigoConta) => {
    try {
        const response = await api.get(`/conta/buscarCodigo/${codigoConta}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}