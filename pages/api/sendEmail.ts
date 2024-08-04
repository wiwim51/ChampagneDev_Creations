import { EmailTemplate } from "@/components/email-template";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstname, lastname, email, subject, message } = req.body;
  const { data, error } = await resend.emails.send({
    from: process.env.MY_EMAIL ?? "",
    to: [email],
    subject: subject,
    react: EmailTemplate({
      firstName: firstname,
      lastName: lastname,
      email: email,
      subject: subject,
      message: message,
    }),
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
};
