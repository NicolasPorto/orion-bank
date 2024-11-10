import { Request, Response } from "express";
import { AlterarSenhaService } from "../../Application/Services/AlterarSenhaService";

export class AlterarSenhaController {
  async AlterarSenha(request: Request, response: Response) {
    try {
      const { senha, codigo } = request.body;

      const alterarSenha = new AlterarSenhaService();
      await alterarSenha.AtualizarSenha(codigo, senha);

      return response.status(200).send();
    } catch (error: any) {
      return response.status(400).send({
        status: "Error",
        message: error.message,
      });
    }
  }
}
