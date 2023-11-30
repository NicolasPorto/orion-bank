import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const enviarEmail = async (documento) => {
    try {
        const response = await api.get(`/autenticacao/recuperarSenha/${documento}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const alterarSenha = async (request) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${request.token}`
            }
        };
        const response = await api.post("/autenticacao/alterarSenha", request, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}