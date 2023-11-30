import { Request, Response } from "express";
import { ExtratoService } from "../../Application/PDF/ExtratoService";
import { GerarPDF } from "../../Application/PDF/GerarPDF";

const extratoService = new ExtratoService()
export class ExtratoController {

    async ExportarExtrato(request: Request, response: Response) {
        try {

            const {
                codigoConta,
                dataInicio,
                dataFim
            } = request.body

            const pdf = await GerarPDF(codigoConta, dataInicio, dataFim);
            return response.status(200).send(pdf);
            
        } catch (error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }

    }

    async Extrato(request: Request, response: Response) {

        try {

            const {
                codigoConta,
                dataInicio,
                dataFim
            } = request.body

            const extrato = await extratoService.FormatarDadosExtrato(codigoConta, dataInicio, dataFim)

            return response.status(200).send(extrato)

        } catch (error: any) {
            return response.status(400).json({
                status: "Error",
                message: error.message
            })
        }

    }
}