import { AutenticacaoDto } from "../../Application/DTOs/AutenticacaoDto";
import { Conta } from "../Entities/Conta";

export interface IAutenticacaoRepository {
    EfetuarConsultaContaExistente(conta: AutenticacaoDto): Promise<Conta>
}