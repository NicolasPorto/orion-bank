import React, { createContext, useState, useContext } from "react";
import { solicitarConta, buscarSolicitacoes, aprovar, reprovar } from "../services/solicitacoesContaApi";
import { showErrorNotification, showSuccessNotification } from '../shared/notificationUtils';
import { useNavigate } from "react-router-dom";
import { format, parse } from 'date-fns';

export const SolicitacoesContaContext = createContext();

export function SolicitacoesContaProvider({ children }) {
    const [solicitacao, setSolicitacao] = useState(null);
    const navigate = useNavigate();

    const solicitar = async (solicitacao) => {
        try 
        {
            const request = {
                documentoFederal: solicitacao.documentoFederal.replace(/\D/g, ''),
                nomeCompleto: `${solicitacao.nome} ${solicitacao.sobrenome}`,
                email: solicitacao.email,
                dtNasc: format(parse(solicitacao.dtNasc, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd'),
                telefoneCelular: solicitacao.telefoneCelular.replace(/\D/g, ''),
                cep: solicitacao.cep.replace(/\D/g, ''),
                logradouro: solicitacao.logradouro,
                numeroResidencial: solicitacao.numero,
            };

            await solicitarConta(request);
            navigate(`/sucessoSolicitacao/${solicitacao.nome}`);
        } catch (error) {
            showErrorNotification(error.message);
        }
    };
    
    const buscarSolicitacoesConta = async () => {
        try 
        {
            return buscarSolicitacoes();
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    const aprovarSolicitacao = async (solicitacao) => {
        try 
        {
            const request = {
                codigoSolicitacao: solicitacao.Codigo,
                documentoFederal: solicitacao.conta.DocumentoFederal,
                nomeCompleto: solicitacao.conta.NomeCompleto,
                email: solicitacao.conta.Email,
                dtNasc: formatarDataNascimento(solicitacao.conta.DtNasc),
                telefoneCelular: solicitacao.conta.TelefoneCelular,
                cep: solicitacao.conta.CEP,
                logradouro: solicitacao.conta.Logradouro,
                numeroResidencial: solicitacao.conta.NumeroResidencial
            }
            await aprovar(request);

            showSuccessNotification("Solicitação aprovada!");
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    const reprovarSolicitacao = async (codigo) => {
        try 
        {
            await reprovar(codigo);
            showSuccessNotification("Solicitação reprovada!");
        } catch (error) {
            showErrorNotification(error.message);
        }
    };

    function formatarDataNascimento(data) {
        if(data){
            const dataObj = new Date(data);
            dataObj.setDate(dataObj.getDate() + 1);
            const dia = String(dataObj.getDate()).padStart(2, '0');
            const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
            const ano = dataObj.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }
    }

    return (
        <SolicitacoesContaContext.Provider value={{ solicitacao, setSolicitacao, solicitar, buscarSolicitacoesConta, aprovarSolicitacao, reprovarSolicitacao }}>
            {children}
        </SolicitacoesContaContext.Provider>
    );
  }

  export function useSolicitacoesConta() {
    return useContext(SolicitacoesContaContext);
  }