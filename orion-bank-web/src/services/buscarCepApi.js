import axios from "axios";

export const buscarCEP = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}