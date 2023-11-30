import { Request, Response } from "express";
import { ContaDto } from "../../Application/DTOs/ContaDto";
import { AbrirContaService } from "../../Application/Services/CriarConta/AbrirContaService";

export class AbrirContaController {

    async SolicitarAberturaDeConta(request: Request, response: Response) {

        try {

            const {
                documentoFederal,
                nomeCompleto,
                email,
                dtNasc,
                telefoneCelular,
                cep,
                logradouro,
                numeroResidencial,
            } = request.body

            const contaDto = {
                DocumentoFederal: documentoFederal.replace(/[^a-zA-Z0-9\s]/g, ''),
                NomeCompleto: nomeCompleto,
                Email: email,
                DtNasc: dtNasc,
                TelefoneCelular: telefoneCelular,
                CEP: cep,
                Logradouro: logradouro,
                NumeroResidencial: numeroResidencial
            } as ContaDto

            const abrirContaService = new AbrirContaService()
            await abrirContaService.SolicitacaoAberturaDeConta(contaDto);
            return response.status(201).send();

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async ObterRegistrosSolicitacaoAberturaConta(request: Request, response: Response) {
        
        try {

            const {
                take,
                skip
            } = request.query
            
            if(take === undefined || skip === undefined) {
                return response.status(400).json({
                    status: "Error",
                    message: "Informações faltantes."
                })
            }

            const abrirContaService = new AbrirContaService()
            const registros = await abrirContaService.ObterSolicitacoesAberturaDeConta(parseInt(take.toString()), parseInt(skip.toString()));

            return response.status(200).send(registros)

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async EfetuarAberturaDeConta(request: Request, response: Response) {

        try {
            const {
                codigoSolicitacao,
                documentoFederal,
                nomeCompleto,
                email,
                dtNasc,
                telefoneCelular,
                cep,
                logradouro,
                numeroResidencial,
            } = request.body

            const contaDto = {
                DocumentoFederal: documentoFederal,
                NomeCompleto: nomeCompleto,
                Email: email,
                DtNasc: dtNasc,
                TelefoneCelular: telefoneCelular,
                CEP: cep,
                Logradouro: logradouro,
                NumeroResidencial: numeroResidencial
            } as ContaDto

            const abrirContaService = new AbrirContaService()
            await abrirContaService.EfetuarAberturaDeConta(contaDto, codigoSolicitacao)

            return response.status(200).send()

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }

    }
    
    async ReprovarAberturaDeConta(request: Request, response: Response){
        try {

            const {
                codigo
            } = request.params

            const abrirContaService = new AbrirContaService()
            await abrirContaService.ReprovarAberturaDeConta(codigo)

            return response.status(200).send()

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async BuscarContaPorCodigo(request: Request, response: Response) {

        try {

            const { codigo } = request.params

            const abrirContaService = new AbrirContaService()
            const conta = await abrirContaService.BuscarContaPorCodigo(codigo)

            if(!conta) {
                return response.status(404).json({
                    status: "Error",
                    message: "Conta não encontrada"
                })
            }

            return response.status(200).send(conta)

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }

    }
}
