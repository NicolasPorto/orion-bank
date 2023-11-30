import { IAlterarSenhaRepository } from "../../Domain/Interfaces/IAlterarSenhaRepository";
import { connection } from "../context/ConnectionString";


export class AlterarSenhaRepository implements IAlterarSenhaRepository {

    async AtualizarSenha(codigo: string, senha: string): Promise<void> {
        
        const parametros = [
            senha,
            codigo
        ]

        const sql = `UPDATE conta
                    SET
                        Senha = MD5(?)
                    WHERE Codigo = ?`

        await (await connection).query(
            sql,
            parametros
        )
    }
    
}