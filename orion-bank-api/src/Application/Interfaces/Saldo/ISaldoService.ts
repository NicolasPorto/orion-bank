import { Saldo } from "../../../Domain/Entities/Saldo";


export interface ISaldoService {
    ObterSaldoPorCodigo(codigo: string) : Promise<Saldo>
}