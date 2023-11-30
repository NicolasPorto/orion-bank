import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return config;
});

export const enviarPixPorChave = async (request) => {
    try {
        await api.post("/movimento/transacaoPixViaChave", request);
    } catch (error) {
        throw error.response.data;
    }
}

export const enviarPixPorEMV = async (request) => {
    try {
        await api.post("/movimento/transacaoEMV", request);
    } catch (error) {
        throw error.response.data;
    }
}

export const enviarTransf = async (request) => {
    try {
        await api.post("/movimento/transacaoDadosBancarios", request);
    } catch (error) {
        throw error.response.data;
    }
}

export const obterUltimaMovimentacao = async (codigoConta) => {
    try {
        const response = await api.get(`/movimento/ultimasTransacoes/${codigoConta}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const obterExtratoConta = async (request) => {
    try {
        const response = await api.post(`/extrato`, request);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const gerarExtratoConta = async (request) => {
    try {
        const response = await api.post(`/extrato/importar`, request)
        return response.data

    } catch (error) {
        throw error.response.data;
    }
}

