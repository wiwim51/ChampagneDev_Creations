require("dotenv").config();
import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: email,
        to: "jordane.lemmair@gmail.com",
        subject: "Nouveau message de contact !",
        text: message,
        html: `<p>${message}</p>`,
      });

      res
        .status(200)
        .json({ success: true, message: "Votre message a bien été envoyé !" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "erreur serveur" });
  }
}
