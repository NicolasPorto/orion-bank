import { ExtratoMovimentoRawQuery } from "../../RawQuery/ExtratoMovimentoRawQuery";

export interface IExtratoRepository {
    ObterMovimentacao(codigoConta: string, dataInicio: Date, dataFim: Date) : Promise<Array<ExtratoMovimentoRawQuery>>
}