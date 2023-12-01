import { Request, Response } from "express";
import { AutenticacaoDto } from "../../Application/DTOs/AutenticacaoDto";
import { AutenticacaoService } from "../../Application/Services/AutenticacaoService";
import { AbrirContaService } from "../../Application/Services/CriarConta/AbrirContaService";


export class AutenticacaoController {   

    async EfetuarAutenticacao(request: Request, response: Response) {
        try {

            const {
                login,
                senha
            } = request.body;
            
            const autenticacaoDto = { Login: login, Senha: senha } as AutenticacaoDto

            const _autenticacaoServices = new AutenticacaoService();
            const autorizado = await _autenticacaoServices.EfetuarLogin(autenticacaoDto);
            
            if(autorizado.Codigo === undefined) {
                return response.status(401).json({
                    status: "Não autorizado",
                    message: "Documento federal ou senha inválido."
                });
            }

            return response.status(200).send(autorizado);

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async RecuperarSenha(request: Request, response: Response) {

        try {

            const { documentoFederal } = request.params

            const abrirContaRepository = new AbrirContaService()
            const conta = await abrirContaRepository.BuscarContaPorDocumentoFederal(documentoFederal)

            if(!conta) {
                return response.status(404).json({
                    status: "Error",
                    message: "Conta não encontrada."
                })
            }

            return response.status(200).send()

        } catch(error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }

    }
}
