import { AlterarSenhaRepository } from "../../Data/Repositories/AlterarSenhaRepository";
import { IAlterarSenhaService } from "../Interfaces/IAlterarSenhaService";

export class AlterarSenhaService implements IAlterarSenhaService {
  async AtualizarSenha(codigo: string, senha: string): Promise<void> {
    let th = this;
    th.ValidarParametros(codigo, senha);

    const alterarSenhaRepository = new AlterarSenhaRepository();
    await alterarSenhaRepository.AtualizarSenha(codigo, senha);
  }

  private ValidarParametros(codigo: string, senha: string) {
    const caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const numericosSenha = /\d/;
    const caracterMaiusculo = /[A-Z]/;

    if (senha.length < 8) {
      throw new Error("A senha não pode conter menos de 8 caracteres.");
    }

    if (senha === null || senha.trim() === "") {
      throw new Error("Senha é obrigatória.");
    }

    if (!caracteresEspeciais.test(senha)) {
      throw new Error("Senha deve conter pelo menos 1 caracter especial.");
    }

    if (!numericosSenha.test(senha)) {
      throw new Error("Senha deve conter pelo menos 1 dígito numérico.");
    }

    if (!caracterMaiusculo.test(senha)) {
      throw new Error("Senha deve conter pelo menos uma letra maiúscula.");
    }

    if (codigo === null || codigo.trim() === "" || codigo.trim().length != 36) {
      throw new Error("Error interno do servidor.");
    }
  }
}
