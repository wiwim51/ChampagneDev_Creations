import { EmailTemplate, ResEmailTemplate } from "@/components/email-template";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Méthode ${req.method} non autorisée`);
  }

  const { firstname, lastname, email, subject, message } = req.body;

  if (!firstname || !lastname || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.SENDER_EMAIL!, // ex. "No-Reply <no-reply@votredomaine.com>"
      to: [process.env.MY_EMAIL!], // votre boîte de réception
      subject: subject,
      reply_to: email, // pour pouvoir répondre directement à l’utilisateur
      react: EmailTemplate({
        firstName: firstname,
        lastName: lastname,
        email,
        subject,
        message,
      }),
    });

    const reception = await resend.emails.send({
      from: process.env.SENDER_EMAIL!,
      to: [email], // envoyer une copie à l'utilisateur
      subject: `Merci pour votre message ${lastname} ${firstname}`,
      react: ResEmailTemplate({
        firstName: firstname,
        lastName: lastname,
        message:
          "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
      }),
    });

    await Promise.all([data, reception]);

    return res.status(200).json({ success: "success" });
  } catch (err: any) {
    console.error("Erreur Resend ▶", err);
    return res.status(500).json({ error: err.message || "Échec de l’envoi." });
  }
}
