export interface MovimentoEMVDto {
    codigoContaOrigem: string
    codigoContaDestino: string
    valor: number
    emv: string
    descTransacao: string
    infoAdicional: string
    tipoTransacao: number
    dtMovimento: Date
}