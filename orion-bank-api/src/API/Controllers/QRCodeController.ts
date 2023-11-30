import { Request, Response } from "express";
import { QRCodeService } from "../../Application/Services/QRCode/QRCodeService";
import { QRCodeDto } from "../../Application/DTOs/QRCodeDto";

const qrCodeService = new QRCodeService();

export class QRCodeController {
    async ConsultarEMV(request: Request, response: Response) {
        try {
            const {
                emv,
                codigoConta
            } = request.query

            const qrCode = await qrCodeService.BuscarQRCodePorEMV(
                emv === undefined ? "" : emv.toString(),
                codigoConta === undefined ? "" : codigoConta.toString()
            )

            if (!qrCode) {
                return response.status(404).json({
                    status: "Error",
                    message: "EMV não localizado."
                })
            }

            return response.status(200).send(qrCode)

        } catch (error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }
    }

    async CriarQRCode(request: Request, response: Response) {
        try {
            const {
                codigoConta,
                chavePix,
                nomeCompleto,
                infoAdicional,
                valor
            } = request.body

            const qrCode = {
                CodigoConta: codigoConta,
                ChavePix: chavePix,
                NomeCompleto: nomeCompleto,
                InfoAdicional: infoAdicional,
                Valor: valor
            } as QRCodeDto

            const retorno = await qrCodeService.CriarQRCode(qrCode)

            if (!retorno) {
                return response.status(404).json({
                    status: "Error",
                    message: "Erro na criação do QRCode."
                })
            }

            return response.status(200).send(retorno)

        } catch (error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }
    }
}