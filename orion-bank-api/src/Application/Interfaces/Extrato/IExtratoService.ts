import { ExtratoMovimentoRawQuery } from "../../../Domain/RawQuery/ExtratoMovimentoRawQuery";


export interface IExtratoService {
    FormatarDadosExtrato(codigoConta: string, dataInicio: Date, dataFim: Date): Promise<Array<ExtratoMovimentoRawQuery>>
}