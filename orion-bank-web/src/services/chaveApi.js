import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return config;
});

export const criarChave = async (request) => {
    try {
        await api.post("/chavePix/criar", request);
    } catch (error) {
        throw error.response.data;
    }
}

export const obterChavesPorConta = async (conta) => {
    try {
        const response = await api.get(`/chavePix/obterPorCodigoConta?codigoConta=${conta}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const consultarChave = async (chave, codigo) => {
    try {
        const response = await api.get(`/chavePix/buscarConta?chavePix=${chave}&codigoConta=${codigo}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const inativarChave = async (codigoChave) => {
    try {
        await api.post(`/chavePix/inativarChave?codigoChave=${codigoChave}`);
    } catch (error) {
        throw error.response.data;
    }
}