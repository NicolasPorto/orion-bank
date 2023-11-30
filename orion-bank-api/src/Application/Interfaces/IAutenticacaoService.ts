import { AutenticacaoDto, AutenticacaoTokenDto } from '../DTOs/AutenticacaoDto' 

export interface IAutenticacaoService {
    EfetuarLogin(conta: AutenticacaoDto): Promise<AutenticacaoTokenDto> 
}