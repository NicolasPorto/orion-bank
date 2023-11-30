import { Saldo } from "../../Entities/Saldo";


export interface ISaldoRepository {
    IniciarSaldoInicialConta(codigoConta: string) : Promise<void>
    ObterSaldoPorCodigo(codigo: string) : Promise<Saldo>
}