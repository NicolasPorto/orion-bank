export interface MovimentoPixDto {
    codigoContaOrigem: string
    codigoContaDestino: string
    valor: number
    chavePix: string
    descTransacao: string
    infoAdicional: string
    tipoTransacao: number
    dtMovimento: Date
}