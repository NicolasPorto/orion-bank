import { ChavePix } from "../../../Domain/Entities/ChavePix";
import { Conta } from "../../../Domain/Entities/Conta";
import { ChavePixDto } from "../../DTOs/ChavePixDto";


export interface IChavePixService {
    CriarChavePix(chavePixDto: ChavePixDto) : Promise<void>
    ObterChavePixPorCodigoConta(codigoConta: string): Promise<Array<ChavePix>>
    InativarChavePix(codigo: string) : Promise<void>
    BuscarContaPorChavePix(chavePix: string, codigo: string) : Promise<Conta>
}