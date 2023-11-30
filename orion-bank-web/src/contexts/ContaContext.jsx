import React, { createContext, useContext } from "react";
import { showErrorNotification } from '../shared/notificationUtils';
import { buscarSaldoConta, buscarConta } from "../services/contaApi";
import { AuthContext } from "./AuthContext";

export const ContaContext = createContext();

export function ContaProvider({ children }) {
    const { user, getTokenInfo } = useContext(AuthContext);

    const buscarSaldo = async () => {
        try {
            const response = await buscarSaldoConta(user.codigo);
            return response.saldo;
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    const buscarNome = () => {
        const token = localStorage.getItem('token');
        const tokenInfo = getTokenInfo(JSON.parse(token));
        return tokenInfo?.Nome;
    };

    const buscarInfoConta = async () => {
        try {
            return await buscarConta(user.codigo);
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    return (
        <ContaContext.Provider value={{ user, buscarSaldo, buscarNome, buscarInfoConta }}>
            {children}
        </ContaContext.Provider>
    );
}

export function useConta() {
    return useContext(ContaContext);
}