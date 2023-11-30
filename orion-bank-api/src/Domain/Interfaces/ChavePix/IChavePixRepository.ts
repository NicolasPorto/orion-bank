import { ChavePix } from "../../Entities/ChavePix";
import { Conta } from "../../Entities/Conta";

export interface IChavePixRepository {
    CriarChavePix(chavePix: ChavePix): Promise<void>
    ObterChavePixPorChave(chavePix: string): Promise<ChavePix>
    ObterChavepixPorCodigo(codigo: string): Promise<ChavePix>
    ObterChavePixPorCodigoConta(codigoConta: string): Promise<Array<ChavePix>>
    BuscarContaPorChavePix(chavePix: string, codigo: string): Promise<Conta>
    InativarChavePix(codigo: string): Promise<void>
    AtivarChavePix(codigo: string): Promise<void>
    BuscarTipoChaveExistenteAtiva(codigo: string, tipoChave: number): Promise<boolean>
}