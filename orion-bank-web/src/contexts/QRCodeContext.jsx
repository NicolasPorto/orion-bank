import React, { createContext, useContext } from "react";
import { criarQRCode, consultarEMV } from "../services/qrCodeApi";
import { showErrorNotification, showSuccessNotification } from '../shared/notificationUtils';
import { AuthContext } from "./AuthContext";


export const QRCodeContext = createContext();

export function QRCodeProvider({ children }) {
    const { user, buscarNomeUsuarioLogado } = useContext(AuthContext);

    const criarQRCodeEstatico = async (request) => {
        try {
            request.codigoConta = user.codigo;
            request.nomeCompleto = buscarNomeUsuarioLogado();
            const response = await criarQRCode(request);
            
            showSuccessNotification("QR Code criado!")
            return response;
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    const consultarDadosEMV = async (emv) => {
        try {
            return await consultarEMV(emv, user.codigo);
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    return (
        <QRCodeContext.Provider value={{ user, criarQRCodeEstatico, consultarDadosEMV }}>
            {children}
        </QRCodeContext.Provider>
    );
}

export function useQRCode() {
    return useContext(QRCodeContext);
}