import React, { createContext, useContext } from "react";
import { enviarEmail, alterarSenha } from "../services/recuperarSenhaApi";
import { showErrorNotification } from '../shared/notificationUtils';
import { useNavigate } from "react-router-dom";

export const RecuperarSenhaContext = createContext();

export function RecuperarSenhaProvider({ children }) {
    const navigate = useNavigate();

    const enviarEmailRecuperacao = async (documento) => {
        try {
            await enviarEmail(documento);
            navigate("/sucessoRecuperar/email");
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    const recuperarSenha = async (request) => {
        try {
            await alterarSenha(request);
            navigate("/sucessoRecuperar/alteracao");
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    return (
        <RecuperarSenhaContext.Provider value={{ enviarEmailRecuperacao, recuperarSenha }}>
            {children}
        </RecuperarSenhaContext.Provider>
    );
}

export function useRecuperarSenha() {
    return useContext(RecuperarSenhaContext);
}