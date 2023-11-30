import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function ValidacaoToken(request: Request, response: Response, next: NextFunction) {

    try {

        const secret = process.env.SECRET_JWT as string;
        const autenticacao = request.headers.authorization

        if(!autenticacao) {
            return response.status(400).json({
                status: "Não autorizado",
                message: "Não foi enviado um token de autorização"
            })
        }

        const [,token] = autenticacao.split(" ")
        verify(token, secret);

        return next();

    } catch(e) {
        return response.status(401).json({
            status: "Não autorizado",
            message: "Token inválido"
        })
    }
}