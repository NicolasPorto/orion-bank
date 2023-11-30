import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const solicitarConta = async (solicitacao) => {
    try {
        const response = await api.post("/abrirConta/solicitacao", solicitacao);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const buscarSolicitacoes = async () => {
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        };

        const response = await api.get(`/abrirConta/obterRegistrosSolicitacao?take=${10}&skip=${0}`, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const aprovar = async (request) => {
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        };
        await api.post("/abrirConta/aprovarSolicitacao", request, config);
    } catch (error) {
        throw error.response.data;
    }
}

export const reprovar = async (codigo) => {
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        };
        await api.post(`/abrirConta/reprovarSolicitadao/${codigo}`, '', config);
    } catch (error) {
        throw error.response.data;
    }
}