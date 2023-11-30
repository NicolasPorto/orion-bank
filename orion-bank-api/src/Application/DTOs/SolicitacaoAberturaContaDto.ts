import { ContaDto } from "./ContaDto";

export interface SolicitacaoAberturaContaDto {
    ID: number
    Codigo: string
    Situacao: number
    DtSituacao: Date
    DtInclusao: Date
    conta: ContaDto
}

