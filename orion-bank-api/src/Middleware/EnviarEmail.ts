import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport";
import dotenv from "dotenv";
dotenv.config();

function ConfigurarEmail(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> {

    const email = process.env.EMAIL;
    const senhaEmail = process.env.SENHA_EMAIL;

    return nodemailer.createTransport({
        host: "outlook.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: email,
            pass: senhaEmail
        }
    })
}

export async function EnviarEmail(emailConta: string, htmlEmail: string, titulo: string): Promise<void> {
    const smtp = ConfigurarEmail()
    const email = process.env.EMAIL;
    console.log(emailConta)
    const configEmail = {
        from: email,
        to: emailConta,
        subject: titulo,
        html: htmlEmail,
        attachments: [
            {
                filename: "logo-orion-bank.png",
                path: "dist/Middleware/Logo/logo-orion-bank.png",
                cid: emailConta,
            }
        ]
    }

    await smtp.sendMail(configEmail)
}