import { Request, Response } from "express";
import { MovimentoDadosBancariosDto } from "../../Application/DTOs/MovimentoDadosBancariosDto";
import { MovimentoPixDto } from "../../Application/DTOs/MovimentoDto";
import { MovimentoEMVDto } from "../../Application/DTOs/MovimentoEMVDto";
import { MovimentoService } from "../../Application/Services/Movimento/MovimentoService";

const movimentoService = new MovimentoService()

export class MovimentoController {

    async RealizarTransacaoPixViaChave(request: Request, response: Response) {
        try {

            const {
                codigoContaDestino,
                codigoContaOrigem,
                valor,
                chavePix,
                infoAdicional
            } = request.body

            const movimento = {
                codigoContaOrigem: codigoContaOrigem,
                codigoContaDestino: codigoContaDestino,
                valor: valor,
                chavePix: chavePix,
                infoAdicional: infoAdicional
            } as MovimentoPixDto

            await movimentoService.RealizarTransacaoPixViaChave(movimento)
            return response.status(200).send()

        } catch (error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async RealizarTransacaoPixViaEMV(request: Request, response: Response) {
        try {

            const {
                codigoContaOrigem,
                valor,
                infoAdicional,
                emv
            } = request.body

            const movimento = {
                codigoContaOrigem: codigoContaOrigem,
                valor: valor,
                emv: emv,
                infoAdicional: infoAdicional,
            } as MovimentoEMVDto

            await movimentoService.RealizarTransacaoPixViaEMV(movimento)
            return response.status(200).send()

        } catch (error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }
    }

    async ObterUltimasTransacoes(request: Request, response: Response) {
        try {

            const { codigoConta } = request.params

            const movimento = await movimentoService.ObterUltimasTransacoes(codigoConta)

            if (!movimento) {
                return response.status(404).send({
                    status: "Conta Sem Transações",
                    message: "Não existe nenhuma transação nesta conta no momento."
                })
            }

            return response.status(200).json(movimento)

        } catch (error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }
    }

    async TransacaoViaDadosBancarios(request: Request, response: Response) {
        try {

            const movimento = request.body as MovimentoDadosBancariosDto

            await movimentoService.RealizarTransacaoPorDadosBancarios(movimento)

            return response.status(200).send();

        } catch (error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }

    }
}