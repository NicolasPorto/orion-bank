import { Request, Response } from 'express'
import { SaldoService } from '../../Application/Services/Saldo/SaldoService'

const saldoService = new SaldoService()

export class SaldoController {

    async ObterSaldo(request: Request, response: Response) {

        try {

            const { codigo } = request.params

            const saldo = await saldoService.ObterSaldoPorCodigo(codigo)

            return response.status(200).json({
                saldo: saldo.Saldo
            })

        } catch(error: any) {
            return response.status(400).send({
                status: "Error",
                message: error.message
            })
        }

    }
}