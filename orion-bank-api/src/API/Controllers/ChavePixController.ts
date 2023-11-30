import { Request, Response } from "express";
import { ChavePixService } from "../../Application/Services/ChavePix/ChavePixService";
import { ChavePixDto } from '../../Application/DTOs/ChavePixDto'

const chavePixService = new ChavePixService()

export class ChavePixController {

    async CriarChave(request: Request, response: Response) {

        try {

            const {
                codigoConta,
                chavePix,
                tipoChave,
            } = request.body

            const chavePixDto = {
                CodigoConta: codigoConta,
                Chave_Pix: chavePix,
                TipoChave: parseInt(tipoChave),
            } as ChavePixDto

            await chavePixService.CriarChavePix(chavePixDto)

            return response.status(200).send()

        } catch(error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }
    }

    async ObterChavesPixPorCodigoConta(request: Request, response: Response) {

        try {

            const {
                codigoConta
            } = request.query

            const chavesPix = await chavePixService.ObterChavePixPorCodigoConta(codigoConta === undefined ? "" : codigoConta.toString())

            return response.status(200).send(chavesPix)

        } catch(error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }

    }

    async InativarChavePix(request: Request, response: Response) {

        try {

            const {
                codigoChave
            } = request.query

            await chavePixService.InativarChavePix(codigoChave === undefined ? "" : codigoChave.toString())

            return response.status(200).send()

        } catch(error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }

    }

    async BuscarContaPorChavePix(request: Request, response: Response) {

        try {

            const {
                chavePix,
                codigoConta
            } = request.query

            const conta = await chavePixService.BuscarContaPorChavePix(
                chavePix === undefined ? "" : chavePix.toString(),
                codigoConta === undefined ? "" : codigoConta.toString()
            )

            if (!conta) {
                return response.status(404).json({
                    status: "Error",
                    message: "Chave pix não localizada."
                })
            }

            return response.status(200).send(conta)

        } catch(error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }
    }
}