import { QRCodeDto } from "../../DTOs/QRCodeDto";
import { QRCodeContaRawQuery } from "../../../Domain/RawQuery/QRCodeContaRawQuery";

export interface IQRCodeService {
    CriarQRCode(qrCode: QRCodeDto): Promise<object>
    BuscarQRCodePorEMV(emv: string, codigoConta: string): Promise<QRCodeContaRawQuery>
}