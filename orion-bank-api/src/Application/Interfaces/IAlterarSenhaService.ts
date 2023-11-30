

export interface IAlterarSenhaService {
    AtualizarSenha(codigo: string, novaSenha: string, senhaAntiga: string) : Promise<void>
}