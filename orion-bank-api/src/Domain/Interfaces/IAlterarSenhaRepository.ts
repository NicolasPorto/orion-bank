export interface IAlterarSenhaRepository {
    AtualizarSenha(codigo: string, senha: string) : Promise<void>
}