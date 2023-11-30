

export interface ExtratoMovimentoRawQuery {
    Data: Date
    TipoTransacao: string
    Descricao: string
    Valor: string
    CodigoContaDestino: string
    CodigoContaOrigem: string
    NomeDestino: string
    NomeOrigem: string
    IsSaida?: boolean
}