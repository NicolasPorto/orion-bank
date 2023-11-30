import React, { createContext, useState, useContext } from "react";
import { buscarCEP } from "../services/buscarCepApi";
import { showErrorNotification } from '../shared/notificationUtils';

export const BuscarCEPContext = createContext();

export function BuscarCEPProvider({ children }) {
    const [cep, setCEP] = useState(null);

    const buscarCep = async (cep) => {
        try 
        {
            const response = await buscarCEP(cep);
        
            if (response.erro)
                showErrorNotification("O CEP informado é inválido.");
            
            const endereco = {
                logradouro: `${response?.logradouro}, ${response?.bairro}.` ?? "",
                localidade: response?.localidade ?? "",
                uf: response?.uf ?? "",
            };
            return endereco;
        } catch (error) {
            showErrorNotification("O CEP informado é inválido.");
        }
    };

    return (
        <BuscarCEPContext.Provider value={{ cep, setCEP, buscarCep }}>
            {children}
        </BuscarCEPContext.Provider>
    );
  }

  export function useBuscarCEP() {
    return useContext(BuscarCEPContext);
  }